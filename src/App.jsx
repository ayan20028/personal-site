import { Routes, Route, Navigate, useParams } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Lab from './pages/Lab'
import ProjectDetail from './pages/ProjectDetail'

function RedirectToLab() {
  const { slug } = useParams()
  return <Navigate to={`/lab/${slug}`} replace />
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="lab" element={<Lab />} />
        <Route path="lab/:slug" element={<ProjectDetail />} />

        {/* Redirects from old URLs */}
        <Route path="vault" element={<Navigate to="/lab" replace />} />
        <Route path="work/:slug" element={<RedirectToLab />} />
      </Route>
    </Routes>
  )
}

export default App
