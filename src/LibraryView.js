import React from 'react';
import './LibraryView.css';
import Card from './Card';

const LibraryView = ({ books }) => {
    return (
        <div className='container'>

            {
                books.map((book) => {
                    return <Card title={book.title} />
                })
            }

        </div>
    )
}

export default LibraryView;