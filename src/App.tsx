import './styles/index.css'
import ListCards from './components/list-cards/ListCards'
import { Sidebar } from './components/sidebar/Sidebar'
import { Button } from './components/ui/button'
import { GoChevronLeft } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";


export default function App() {
  return (
    <div className='flex flex-col items-center'>
      <div className='min-w-319 flex justify-between'>
        <div>
          <Button variant="ghost" className="px-5 py-3 font-normal text-base flex gap-[10px] items-center"><GoChevronLeft /> Назад</Button>
          <div className='flex gap-3 items-baseline'>
            <h2 className='font-[Play] font-bold text-2xl'>Заказ на Пролетарская 89Ф</h2>
            <p className='font-normal text-xs text-gray-400'>1247 товаров</p>
          </div>
        </div>
      </div>
      <div className='w-319 flex justify-end'>
        <Button variant="ghost" className="px-5 py-3 font-normal text-base flex gap-[10px] items-center"><FaRegEdit className='text-gray-500'/> Редактировать заказ</Button>
      </div>
      <div className='flex justify-center gap-5'>
        <ListCards />
        <Sidebar />
      </div>
    </div>
  )
}
