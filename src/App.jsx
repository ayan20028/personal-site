import { Routes, Route, Navigate } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work/:slug" element={<ProjectDetail />} />

        {/* Redirects: old URLs → home */}
        <Route path="lab" element={<Navigate to="/" replace />} />
        <Route path="lab/*" element={<Navigate to="/" replace />} />
        <Route path="vault" element={<Navigate to="/" replace />} />
        <Route path="work/*" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App
