import React, { Fragment, useState } from 'react';

import { Link } from 'react-router-dom'
import '../Pages.css'

export const Home = (props) => {

    const [items, setItems] = useState(props)
    console.log(items)

    return (
    <Fragment>
        <div className="page-container">
            <h1 className="page-title">What Should I Eat?</h1>
        </div>
        <div className="container">
            <br></br>
            <p className="home-parag">Add, sort and delete items your pantry items.  </p>
            <p className="home-parag">Then click the button below to find 'What You Should Eat' before expiry. </p>
           
            <Link to='/findfood' className="submit-btn" id="food-select-btn">Find Food to Eat</Link>
        </div>

    </Fragment>
    )
};

    
