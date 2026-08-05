/**
 * Remove grey matte + soft drop shadow baked into blog photo exports.
 * Run: npm run fix:blog-photos --prefix client
 */
import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const photosDir = path.join(__dirname, '../public/photos')

function isBackdrop(r, g, b, a) {
  if (a < 12) return true
  const spread = Math.max(r, g, b) - Math.min(r, g, b)
  const lum = (r + g + b) / 3
  if (a < 72 && spread < 22) return true
  if (lum > 215 && spread < 30) return true
  return false
}

async function stripMatte(filePath) {
  const { data, info } = await sharp(filePath).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  const { width, height, channels: ch } = info
  const w = width
  const h = height

  function idx(x, y) {
    return (y * w + x) * ch
  }

  const visited = new Uint8Array(w * h)
  const queue = []

  for (let x = 0; x < w; x++) {
    queue.push([x, 0], [x, h - 1])
  }
  for (let y = 0; y < h; y++) {
    queue.push([0, y], [w - 1, y])
  }

  while (queue.length) {
    const [x, y] = queue.pop()
    if (x < 0 || y < 0 || x >= w || y >= h) continue
    const p = y * w + x
    if (visited[p]) continue
    visited[p] = 1

    const i = idx(x, y)
    const r = data[i]
    const g = data[i + 1]
    const b = data[i + 2]
    const a = data[i + 3]

    if (!isBackdrop(r, g, b, a)) continue

    data[i + 3] = 0
    queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1])
  }

  const tmp = filePath.replace(/\.png$/i, '.tmp.png')
  await sharp(data, { raw: { width: w, height: h, channels: ch } }).png().toFile(tmp)
  fs.renameSync(tmp, filePath)
}

const names = fs.readdirSync(photosDir).filter((n) =>
  /^blog-\d+-(inline-\d+|portrait|callout)\.png$/i.test(n),
)

for (const name of names) {
  const full = path.join(photosDir, name)
  await stripMatte(full)
  console.log('Updated', name)
}

console.log(`Done (${names.length} files).`)
