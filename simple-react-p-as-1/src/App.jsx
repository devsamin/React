
import './App.css'
import Banner from './components/Banner/Banner'
import Header from './components/Header/Header'
import { useState } from 'react'
import Products from './components/Products/Products'
function App() {
  const [coin, setcoin] = useState(0)

  const [buyproduct, setbuyproduct] = useState([]);
  const [showselected, setshowselected] = useState(false);

  const handelcoin = () =>{
      const Newaddcoin = coin + 200
      setcoin(Newaddcoin)
  }
  const removeItem=(id)=>{
    // console.log(id)
    const UpdateProduct = buyproduct.filter(p=> p.id != id)
    setbuyproduct(UpdateProduct)
  }
  const handelprice = (price, product)=>{

    
    
    // console.log(product)
    if(coin>=price){
      const isExist = (buyproduct.find(item => product.id === item.id))
        if(!isExist){
          if(buyproduct.length < 6){
            setbuyproduct([...buyproduct, product])
            setcoin(coin-price)
            alert("Congratulations.... for buy this ")
          }
          else{
            alert("Your cart is limited maximum product add 6 time!!!!!")
          }
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
      <Products
        handelprice={handelprice}
        showselected={showselected}
        setshowselected={setshowselected}
        buyproduct={buyproduct}
        removeItem={removeItem}
      
      ></Products>

      
      
    </>
  )
}

export default App
