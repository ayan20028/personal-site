import { Routes, Route } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import Vault from './pages/Vault'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work/:slug" element={<CaseStudy />} />
        <Route path="vault" element={<Vault />} />
      </Route>
    </Routes>
  )
}

export default App
