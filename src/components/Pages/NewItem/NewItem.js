import React, { Fragment, useState } from 'react'; 
import { NewItemForm } from './NewItemForm';

import '../Pages.css'

export const NewItem = () => {
    const [item, setItem] = useState([])

    console.log('newitem passing', item)
     
    // addItem( () => {
    //     // localStorage.getItem(content)
    //     // console.log(content)
    // })
    // {
        // localStorage.getItem(content)
        // console.log(content)
        // axios.post(localStorage, {content: content}).then((result) => {
        //     console.log(result.data);
        //     setItems(result.data)
        // })
    // }

        return (
            <Fragment>
                <div className="page-container">
                    <h1 className="page-title">New Item </h1>
                </div>
                
          
    
                <NewItemForm onSubmit={ setItem }
                />
            </Fragment>
        )

}



