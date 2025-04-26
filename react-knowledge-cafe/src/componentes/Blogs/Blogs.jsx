import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handelevent,handelreadingtime}) => {

    const [blogs, setblogs] = useState([])
    
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=> setblogs(data))
    },[])
    return (
        <div className='md: w-2/3'>
            <h2 className='text-4xl'>Blogs : {blogs.length}</h2>
            {
                blogs.map(blogs=> <Blog key={blogs.id} handelreadingtime={handelreadingtime} handelevent={handelevent}  blog={blogs}></Blog>) 
            }
        </div>
    );
};

export default Blogs;