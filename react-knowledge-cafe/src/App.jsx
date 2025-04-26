
import { useState } from 'react'
import './App.css'
import Blogs from './componentes/Blogs/Blogs'
import Bookmarks from './componentes/Bookmarks/Bookmarks'
import Header from './componentes/Header/Header'

function App() {
    const [booksmark, setbooksmark] = useState([])
    const [readingtime, setreadingtime] = useState(0)
    const handelreadingtime = (time, id) =>{
      setreadingtime(readingtime + time)
      // console.log("remove bookmark ", id)
      const remeningbookmark = booksmark.filter(bookmark => bookmark.id != id)
      setbooksmark(remeningbookmark)
    }
    const handelevent = blog =>{
      // console.log(blog)
      const newblog = [...booksmark, blog]
      setbooksmark(newblog)
    }
  return (
    <>
      
      <Header></Header>
      <div className='md: flex w-6xl mx-auto'>
        <Blogs handelreadingtime={handelreadingtime} handelevent={handelevent}></Blogs>
        <Bookmarks booksmark={booksmark} readingtime={readingtime}></Bookmarks>
      </div>
    </>
  )
}

export default App
