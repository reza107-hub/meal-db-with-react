import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Meal from './components/Meal/Meal'
import Cart from './components/cart/Cart'

function App() {
  const [name,setName] = useState(null)
  const addToSummary =(name)=>{
    setName(name)
  }
  return (
    <div className="App">
      <Header></Header>
      <div className='grid grid-cols-[4fr,1fr] mt-5'>
      <Meal addToSummary={addToSummary}></Meal>
      <Cart names={name}></Cart>
      </div>
    </div>
  )
}

export default App
