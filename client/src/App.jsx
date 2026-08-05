import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import InsightsPage from './pages/InsightsPage.jsx'
import InsightArticlePage from './pages/InsightArticlePage.jsx'
import InsightsLegacyRedirect from './components/InsightsLegacyRedirect.jsx'

export default function App() {
  return (
    <>
      <InsightsLegacyRedirect />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/insights/:slug" element={<InsightArticlePage />} />
      </Routes>
    </>
  )
}
