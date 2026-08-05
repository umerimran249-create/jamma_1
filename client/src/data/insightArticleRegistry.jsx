import BlogArticleComplexity from '../components/BlogArticleComplexity.jsx'
import BlogArticleCfo from '../components/BlogArticleCfo.jsx'
import BlogArticleCfoSuccess from '../components/BlogArticleCfoSuccess.jsx'
import BlogArticleWater from '../components/BlogArticleWater.jsx'
import BlogArticleWeatherford from '../components/BlogArticleWeatherford.jsx'
import BlogArticleInflexion from '../components/BlogArticleInflexion.jsx'
import { ARTICLE_SLUGS } from './insightsPosts.js'

export function InsightArticleBySlug({ slug, id = 'insight-article' }) {
  switch (slug) {
    case ARTICLE_SLUGS.complexity:
      return <BlogArticleComplexity id={id} />
    case ARTICLE_SLUGS.cfo:
      return <BlogArticleCfo id={id} />
    case ARTICLE_SLUGS.cfoSuccess:
      return <BlogArticleCfoSuccess id={id} />
    case ARTICLE_SLUGS.water:
      return <BlogArticleWater id={id} />
    case ARTICLE_SLUGS.weatherford:
      return <BlogArticleWeatherford id={id} />
    case ARTICLE_SLUGS.inflexion:
      return <BlogArticleInflexion id={id} />
    default:
      return null
  }
}
