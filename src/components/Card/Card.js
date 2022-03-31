import React from 'react';

import classes from './Card.module.css';

const Card = props => {
    return (
        <div className={classes.Card}>
            <img src={props.card.image} alt=''/>
            <div className={classes.Container}>
                <p>{props.card.suit}</p>
            </div>
        </div>
    );
};

export default Card;