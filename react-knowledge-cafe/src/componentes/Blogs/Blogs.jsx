import React, { useEffect, useState } from 'react';

const Blogs = () => {

    const [bolgs, setblogs] = useState([])
    
    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=> console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;