
import './App.css'
import LineChatss from './Componentes/LineChartss/LineChatss'
import Navbar from './Componentes/Navbar/Navbar'
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
      
       
    </>
  )
}

export default App
