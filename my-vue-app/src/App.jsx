import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBarPrincipal from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom'
import CarouselHome from './components/Carousel/Carousel'
import ItemListContainerSearch from './components/ItemListContainerSearch/ItemListContainerSearch'


function App() {
  return (
   <BrowserRouter>
      <NavBarPrincipal/>
      <CarouselHome/>
      <Routes>
        <Route path='/' element={<ItemListContainerSearch/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path='/category/:categoryid' element={<ItemListContainer/>}/>
        <Route path='*' element={<h4>error 404 PAGE NOT found</h4>}/>
        </Routes>
   </BrowserRouter>
)
}

export default App
