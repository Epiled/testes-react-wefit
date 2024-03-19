import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Carrinho from './pages/Carrinho'
import CompraRealizada from './pages/CompraRealizada'
import EstilosGlobais from './styles/EstilosGlobais'
import { Suspense } from 'react'
import Carregando from './components/Carregando'
import Header from './components/Header'
import ContainerPadrao from './components/ContainerPadrao'

function App() {

  return (
    <Router>
      <EstilosGlobais />
      <Header />
      <Suspense fallback={<Carregando />} />
      <Routes>
        <Route path='/' element={<ContainerPadrao />}>
          <Route index path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/compra-realizada" element={<CompraRealizada />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
