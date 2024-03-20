import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { RecoilRoot } from 'recoil'
import EstilosGlobais from './styles/EstilosGlobais'
import { Suspense, lazy } from 'react'
import Carregando from './components/Carregando'
import Header from './components/Header'

const ContainerPadrao = lazy(() => import('./components/ContainerPadrao'));
const FeedBack = lazy(() => import('./components/FeedBack'));
const Home = lazy(() => import('./pages/Home'));
const Carrinho = lazy(() => import('./pages/Carrinho'));
const CompraRealizada = lazy(() => import('./pages/CompraRealizada'));

function App() {

  return (
    <Router>
      <RecoilRoot>
        <EstilosGlobais />
        <Header />
        <Suspense fallback={<Carregando />}>
          <Routes>
            <Route path='/' element={<ContainerPadrao />}>
              <Route index path="/" element={<Home />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="/compra-realizada" element={<CompraRealizada />} />
            </Route>
            <Route path='*' element={<FeedBack tipo='notFound' />} />
          </Routes>
        </Suspense>
      </RecoilRoot>
    </Router>
  )
}

export default App
