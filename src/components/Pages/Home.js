import React, { Fragment } from 'react';
// import { AddItem } from './NewItem';
import './Pages.css'

export const Home = () => (
    <Fragment>
        <div className="page-container">
            <h1 className="page-title">What Should I Eat?</h1>
        </div>
        <div className="container">
            <p>add a button here which user can select, which gives them a list of the top 5 to 10 items they should eat as close to expiry. </p>
            <button className="submit-btn">Select Food</button>
        </div>
    </Fragment>
);

    
