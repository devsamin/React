
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'
function App() {

  function handelClick(){
    alert("Clicked 1")
  }

  const handelClick2 = (num)=>{
    alert(num+10)
  }

  return (
    <>
      
      <h3>React Core Consepts Part 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handelClick}>First Click</button>

      <button onClick={()=> alert('Clicked 2')}>Second Click</button>
      <button onClick={()=> handelClick2(2)}>Third Click</button>

      
    </>
  )
}

export default App
