import React from 'react';
import classes from './MyInput.module.css'

const MuInput = (props) => {
    return (
        <input className={classes.myInput} {...props}/>
    );
};

export default MuInput;