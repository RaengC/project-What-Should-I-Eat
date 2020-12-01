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
            <p className="home-parag">Click the button to find your top foods to Eat before expiry. </p>
           
            <Link to='/findfood' className="submit-btn home-submit">Find Food to Eat</Link>
        </div>

    </Fragment>
    )
};

    
