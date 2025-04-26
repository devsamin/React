import React from 'react';
import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";
const Blog = ({ blog , handelevent,handelreadingtime}) => {
    // console.log(blog);
    const {id,title,cover,author, author_img, posted_date, reading_time,hashtags} = blog
    return (
        <div>
            <img className='w-200 mb-4' src={cover} alt="" />
            
            <div className='flex justify-between ' >
                <div className='flex'>
                    <div >
                    <img className='w-16 rounded-full mb-7' src={author_img} alt="" />
                    </div>
                    <div className='ml-4'>
                    <p><h4 className='text-2xl text-black-800 font-bold'>{author}</h4></p>
                    <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} Min Read</span>
                    <button onClick={()=> handelevent(blog)} className='ml-3 text-2xl text-blue-700'><FaRegBookmark /></button>
                </div>
                
            </div>
            <h3 className='text-4xl mb-4'>{title}</h3>
                <div className='mb-4'>
                    {
                        hashtags.map((hash,idx)=><span key={idx}><a href="">{hash}</a></span>)
                    }
                </div>
            <button onClick={()=>handelreadingtime(reading_time,id)} className=' text-purple-800 mb-3 underline text-1xl font-bold'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};

export default Blog;
