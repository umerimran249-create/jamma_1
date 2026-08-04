/**
 * Fix intro.png: remove light gray matte + blue color cast.
 * Run: npm run fix:intro --prefix client
 */
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const input = path.join(__dirname, '../public/images/intro.png')

if (!fs.existsSync(input)) {
  console.error('Missing:', input)
  process.exit(1)
}

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const { width, height, channels: ch } = info
const w = width
const h = height

function idx(x, y) {
  return (y * w + x) * ch
}

function isGrayBg(r, g, b, a) {
  if (a < 8) return true
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const spread = max - min
  const lum = (r + g + b) / 3
  return lum > 210 && spread < 28
}

// Flood-fill from edges: knock out gray matte / page background baked into PNG
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

  if (!isGrayBg(r, g, b, a)) continue

  data[i + 3] = 0

  queue.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1])
}

// De-blue remaining photo pixels
for (let i = 0; i < data.length; i += ch) {
  if (data[i + 3] === 0) continue
  let r = data[i]
  let g = data[i + 1]
  let b = data[i + 2]

  b = b * 0.72
  r = Math.min(255, r * 1.08 + 10)
  g = Math.min(255, g * 1.04 + 5)

  data[i] = Math.round(r)
  data[i + 1] = Math.round(g)
  data[i + 2] = Math.round(b)
}

const tmp = input.replace(/\.png$/i, '.fixed.png')
await sharp(data, { raw: { width: w, height: h, channels: ch } })
  .png()
  .toFile(tmp)

fs.renameSync(tmp, input)
console.log('Updated', input)
