import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getPostBySlug, insightArticlePath } from '../data/insightsPosts.js'

/** Sends old /insights#insight-article-{slug} links to /insights/{slug}. */
export default function InsightsLegacyRedirect() {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (pathname !== '/insights' || !hash) return

    let slug = hash.replace(/^#/, '')
    if (slug.startsWith('insight-article-')) {
      slug = slug.slice('insight-article-'.length)
    }

    if (getPostBySlug(slug)) {
      navigate(insightArticlePath(slug), { replace: true })
    }
  }, [pathname, hash, navigate])

  return null
}
