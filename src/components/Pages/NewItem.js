import React, {Fragment} from 'react'; 
import { NewItemForm } from './NewItemForm';

import './Pages.css'

export const NewItem = () => {
    return (
        <Fragment>
            <div className="page-container">
                <h1 className="page-title">New Item </h1>
            </div>

            <NewItemForm />
        </Fragment>
    )
}