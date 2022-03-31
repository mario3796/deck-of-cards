import React from 'react';

import classes from './Form.module.css';

const Form = props => {

    return (
        <form className={classes.Form}>
            <label htmlFor='count'>Count:</label>
            <input value={props.counter} id='number' type="number"
            onChange={(event) => props.setCounter(event.target.value)} />
            <button type='button' onClick={props.clicked}>Submit</button>
        </form>
    );
};

export default Form;