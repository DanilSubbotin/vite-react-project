import { Header } from '@/widgets/header/Header'
import '../styles/index.css'
import { OrderPage } from '@/pages/technicalSpecs/OrderPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OtherPage } from '@/pages/otherPage/otherPage';
import { Prices } from '@/pages/prices/Prices';
import { Suppliers } from '@/pages/suppliers/Suppliers';
import { Profile } from '@/pages/profile/profile'
import { routes } from '@/app/routes/routes'




export default function App() {
  return (
    <Router >
      <div className='bg-bg-document flex flex-col items-center px-5'>
        <Header />
        <main>
          <Routes>
            <Route path={routes.otherPage} element={<OtherPage />}></Route>
            <Route path={routes.prices} element={<Prices />}></Route>
            <Route path={routes.technicalSpecs} element={<OrderPage />}></Route>
            <Route path={routes.suppliers} element={<Suppliers />}></Route>
            <Route path={routes.profile} element={<Profile/>}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  )
}
