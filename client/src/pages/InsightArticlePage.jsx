import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import InsightsReadMore from '../components/InsightsReadMore.jsx'
import { InsightArticleBySlug } from '../data/insightArticleRegistry.jsx'
import { getPostBySlug, isKnownInsightSlug } from '../data/insightsPosts.js'

export default function InsightArticlePage() {
  const { slug: rawSlug } = useParams()
  const slug = rawSlug ? decodeURIComponent(rawSlug).trim() : ''
  const post = getPostBySlug(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!isKnownInsightSlug(slug) || !post) {
    return <Navigate to="/insights" replace />
  }

  return (
    <>
      <Header />
      <main className="insights-page insights-page--article">
        <div className="insights-page-inner">
          <InsightArticleBySlug slug={post.slug} id="insight-article" />
          <InsightsReadMore excludeSlug={post.slug} />
        </div>
      </main>
      <Footer />
    </>
  )
}
