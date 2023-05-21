

import './App.css'
import { Children } from 'react'
import Boton from './components/Button/Button'
import FlexComponent from './components/Flex/FlexComponent'
import Item from './components/Item/Item'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Main from './components/Main/Main'
import NavBarPrincipal from './components/navBar/navBar'

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Itemlist from './components/ItemList/Itemlist'




function App() {
  
  return (
    
    <>
    <div>
       <NavBarPrincipal/>
       <div>
       <ItemListContainer/>
       </div>
   

         
            






    
    
    <div>
   
   <ItemDetailContainer/>

    </div>
    </div>
</>
  )
  }

export default App
