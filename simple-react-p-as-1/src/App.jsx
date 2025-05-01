
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import { useState } from 'react'
import Products from './components/Products/Products'
function App() {
  const [coin, setcoin] = useState(0)

  const [buyproduct, setbuyproduct] = useState([])

  const handelcoin = () =>{
      const Newaddcoin = coin + 200
      setcoin(Newaddcoin)
  }
  const handelprice = (price, product )=>{
    
    
    // console.log(product)
    if(coin>=price){
      const isExist = (buyproduct.find(item => product.id === item.id))
        if(!isExist){
          setbuyproduct([...buyproduct, product])
          setcoin(coin-price)
          alert("Congratulations.... for buy this ")
        }
        else {
          alert("Already you have this product")
        }
      }
      else{
        alert("You need more money buy for this product")
      }
    
    
  }
  return (
    <>
      
     
      <Header coin={coin}></Header>
      <Banner handelcoin={handelcoin}></Banner>
      <Products handelprice={handelprice}></Products>
      
      
    </>
  )
}

export default App
