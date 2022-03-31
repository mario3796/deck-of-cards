import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

import classes from './Cards.module.css';

const Cards = props => {
    const cards = props.cards.map(card => (
        <Link to='/card-details' state={{ card: card }}>
            <Card card={card} />
        </Link>
    ))
    return (
        <div className={classes.Cards}>
            {cards.length > 0 ? cards : <p>No loaded cards!</p>}
        </div>
    ); 
};

export default Cards;