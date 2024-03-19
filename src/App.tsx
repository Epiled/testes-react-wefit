import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Carrinho from './pages/Carrinho'
import CompraRealizada from './pages/CompraRealizada'
import EstilosGlobais from './styles/EstilosGlobais'

function App() {

  return (
    <Router>
      <EstilosGlobais />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/carrinho" element={<Carrinho />} />
        <Route index path="/compra-realizada" element={<CompraRealizada />} />
      </Routes>
    </Router>
  )
}

export default App
