export const ARTICLE_SLUGS = {
  complexity: 'cost-of-complexity',
  cfo: 'cfo-enterprise-value',
  cfoSuccess: 'cfo-organizational-success',
  water: 'water-infrastructure',
  weatherford: 'weatherford-comeback',
  inflexion: 'inflexion-sap-2026',
}

export const INSIGHTS_POSTS = [
  {
    slug: ARTICLE_SLUGS.complexity,
    cardKey: 'complexity',
    title: 'The Cost of Complexity: Why Regional Expansion Is Exposing Weak Operating Models',
  },
  {
    slug: ARTICLE_SLUGS.cfo,
    cardKey: 'cfo',
    title: 'The CFO as an Architect of Enterprise Value',
  },
  {
    slug: ARTICLE_SLUGS.cfoSuccess,
    cardKey: 'cfoSuccess',
    title: 'How CFOs Drive Organizational Success',
  },
  {
    slug: ARTICLE_SLUGS.water,
    cardKey: 'water',
    title: 'Water Infrastructure Upgrade: A Strategic Priority for Nations',
  },
  {
    slug: ARTICLE_SLUGS.weatherford,
    cardKey: 'weatherford',
    title: 'Weatherford went Bankrupt in 2019 They Came Back. How?',
  },
  {
    slug: ARTICLE_SLUGS.inflexion,
    cardKey: 'inflexion',
    title: 'Inflexion Showcases AI Innovation at SAP Connect Day UAE 2026',
    cropFocus: true,
  },
]

export function insightArticlePath(slug) {
  return `/insights/${slug}`
}

export function getPostBySlug(slug) {
  if (!slug) return undefined
  const normalized = decodeURIComponent(slug).trim().toLowerCase()
  return INSIGHTS_POSTS.find((p) => p.slug.toLowerCase() === normalized)
}

export function isKnownInsightSlug(slug) {
  return Boolean(getPostBySlug(slug))
}
