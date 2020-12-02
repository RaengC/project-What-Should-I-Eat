import { render } from '@testing-library/react';
import React, { Fragment } from 'react'; 

export const Edit = (props) => {
    return (
        <Fragment>
             <div className="page-container">
                <h1 className="page-title">Edit</h1>
            </div>
            <h2>Edit coming soon</h2>
        </Fragment>
    )
}