import React from 'react';
import './Card.css';

const Card = ({ title }) => {
    return (
        <article className='book'>
            <img src="" alt="Book Title" />
            <h2>{title}</h2>
            <p>Author(s)</p>
        </article>
    )
}

export default Card;