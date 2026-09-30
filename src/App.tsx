import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="*"
        element={
          <main className="p-6">
            <h1 className="text-2xl font-bold">Page not found</h1>
          </main>
        }
      />
    </Routes>
  )
}

export default App