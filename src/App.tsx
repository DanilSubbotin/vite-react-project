import './styles/index.css'
import { InfiniteScrollItems } from './components/pages/OrderPage'
import { MockCardsData } from './components/card/mockData'



export default function App() {
  return (
    <InfiniteScrollItems MockCardsData={MockCardsData}/>
  )
}
