
import './App.css'
import LineChatss from './Componentes/LineChartss/LineChatss'
import Navbar from './Componentes/Navbar/Navbar'
import Phones from './Componentes/Phones/Phones'
import PriceOptions from './Componentes/PriceOptions/PriceOptions'
// import DaisyNav from './Componentes/DaisyNav/DaisyNav'

function App() {

  return (
    <>
    {/* <DaisyNav></DaisyNav> */}
    <Navbar></Navbar>
    <h3 className="text-4xl">Best Price In The Gym</h3>
    <PriceOptions></PriceOptions>
    <LineChatss></LineChatss>
    <Phones></Phones>
      
       
    </>
  )
}

export default App
