import React from 'react';
import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    console.log(bookmark)
    const {title} = bookmark
    console.log(title)
    return (
        <div className=' bg-slate-300 p-5 rounded-2xl mb-2 ml-1 mt-5'>
            <h3 className='text-2xl'>{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;