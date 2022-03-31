import React from 'react';
import { useLocation } from 'react-router-dom';

import classes from './CardDetails.module.css';

const CardDetails = props => {
    const location = useLocation();
    const { card } = location.state;
    return (
        <div className={classes.CardDetails}>
            <div className={classes.CardImage}>
            <h1>Card Details</h1>
                <img src={card.image} alt=''/>
                <div className={classes.container}>
                    <p>Code: {card.code}</p>
                    <p>Suit: {card.suit}</p>
                    <p>Value: {card.value}</p>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;