import { useEffect, useState } from 'react'
import './App.css'
import Watch from './components/watch/Watch'

function App() {
  const [Watches, setWatches] = useState([])

  useEffect(()=>{
    fetch("watches.json")
    .then(res=>res.json())
    .then(data=>setWatches(data))
  },[])
  // const Watches = [
  //   { id: 1, name: "Rolex Submariner", price: 8500 },
  //   { id: 2, name: "Casio G-Shock", price: 150 },
  //   { id: 3, name: "Fossil Grant Chronograph", price: 180 },
  //   { id: 4, name: "Apple Watch Series 9", price: 399 },
  //   { id: 5, name: "Seiko 5 Automatic", price: 120 }
  // ];

  return (
    <>

      <h1>Vite + React</h1>

      {
        Watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
