import React from 'react';
import './Card.css';

const Card = ({ title, author }) => {
    return (
        <article className='book'>
            <img src="" alt="Book Title" />
            <h2>{title}</h2>
            <p>{author}</p>
        </article>
    )
}

export default Card;