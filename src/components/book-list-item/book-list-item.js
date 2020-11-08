import React, { Fragment } from 'react';


const BookListItem = ({ book }) => {
    const { title, author, price, coverImage } = book;
    return (
        <div className='book-list-item'>
            <div className='book-cover '>
            <img src={coverImage} alt='cover' />
            </div>
            <div className='book-details'>
            <a href='#' className='book-title'>{title}</a>
            <div className='book-author'>{author}</div>
            <div className='book-price'>${price}</div>
            </div>

        </div>    
        );
}

export default BookListItem;