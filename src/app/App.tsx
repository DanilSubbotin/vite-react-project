import { Header } from '@/widgets/header/Header'
import '../styles/index.css'
import { OrderPage } from '@/pages/technicalSpecs/OrderPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OtherPage } from '@/pages/otherPage/otherPage';
import { Prices } from '@/pages/prices/Prices';
import { Suppliers } from '@/pages/suppliers/Suppliers';




export default function App() {
  return (
    <Router >
      <div className='bg-bg-document flex flex-col items-center'>
        <Header />
        <main>
          <Routes>
            <Route path='/other-page' element={<OtherPage />}></Route>
            <Route path='/prices' element={<Prices />}></Route>
            <Route path='/' element={<OrderPage />}></Route>
            <Route path='/suppliers' element={<Suppliers />}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  )
}
