import { act, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'
function App() {

  const names = ['Rohim', 'Koddos', 'Faruk', 'Bokkkor']
  const singers = [
    {name : "samin", age : 21},
    {name : "Rogim", age : 22},
    {name : "Ikbal", age : 19},
  ]
  const books = [
    {name : "Chemistry", price: 200},
    {name : "Physics", price: 200},
    {name : "Biology", price: 200},
  ]
  return (
    <>
     
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>
      <Actor name="abdulla al samin"></Actor>
      {
        names.map(actor=><Actor name={actor}></Actor>)
      }
      {
        singers.map(singer=><Singer singer={singer}></Singer>)
      }
      {/* <Todo tas="Learning react" isDone={true}></Todo>
      <Todo task="core consepts react" isDone={truek}></Todo>
      <Todo task="React ke maro thaba" isDone={false}></Todo> */}
      {/* <Device name="laptop" price="22k"></Device>
      <Device name="mobile" price="20k"></Device>
      <Parson></Parson>
      <Parson></Parson>
      <Parson></Parson>
      <Student grade="4" score="99"></Student>
      <Student grade={10} score="30"></Student>
      <Student></Student>
      <Developer></Developer> */}
      
    </>
  )
}
function Device(props){
  // console.log(props)
  return <h3>This is My Device : {props.name} and price : {props.price}</h3>
}
function Parson(){
  const age = 30
  const parson = {name: "samin", age: 20}
  return <h3>I am {parson.name} my age {age}</h3>
  
}
// const {grade, score} = {"grade" : 4, "score" : 99} distracturing apporceh
function Student({grade=1, score=0}){
  console.log(grade, score)
  return (
    <div className='student'>
    <h3>I am a student</h3>
    <h3>my age : {grade} socore : {score}</h3>
  </div>
  )
}

function Developer(){
  const developerStyle = {
    margin : "10px",
    border : "1px solid gray",
    padding : "20px"
  }
  return(
    <div style={developerStyle}>
      <h3>Debo looo</h3>
      <h3>Debo looo coding</h3>
    </div>
  )
}
export default App
