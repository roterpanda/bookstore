import React from 'react';
import './LibraryView.css';
import Card from './Card';

const LibraryView = ({ books }) => {
    return (
        <div className='container'>

            {
                books.map((book, i) => {
                    return <Card title={book.title} author={book.author} key={i} />
                })
            }

        </div>
    )
}

export default LibraryView;