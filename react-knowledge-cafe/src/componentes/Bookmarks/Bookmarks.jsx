import React from 'react';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({booksmark,readingtime}) => {
    return (
        <div className='md: w-1/3 text-center p-2 bg-sky-200 ml-10'>
            <div>
                <h3 className="text-2xl">Reading Time : {readingtime}</h3>
            </div>
            <h2 className='text-3xl'>Bookmarked Blogs : {booksmark.length}</h2>
            {
                booksmark.map((bookmark,idx)=><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;