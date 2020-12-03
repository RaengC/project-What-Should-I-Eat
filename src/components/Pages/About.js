import React, { Fragment } from 'react';
import './Pages.css'

export const About = () => (
    <Fragment>
        <div className="page-container">
            <h1 className="page-title">About</h1>
        </div>
        <div className="container">
            <h3 className="about-headers">How to use this App</h3>
            <br></br>
            <p>A freezer/fridge/pantry inventory app. Where you can add items (in any format you like), set a “use by” date, remove portions, filter and delete. </p>
            <br></br>
            <p>This is app can only be used on one device (if you want to keep all your items in one place that is!). There is no login and all your data is kept on your local storage. </p>
            <br></br>
            <h4 className="about-headers">Created by Raeng Castagna</h4>
            <br></br>
            <a className="about-link"
            href="https://github.com/RaengC">Check out my github here</a>
            
        </div>
    </Fragment>
);