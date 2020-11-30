import React, { Fragment, useState } from 'react';

import { Home } from './Home';
import { Inventory } from './Inventory';

// pass data from local storage to Container to Home and Inventory to be able to manipulate the data on the DOM

export const Container = () => {
    const localItems = localStorage.getItem('items');
    // passes the localStorage items to state. 
    const [items, setItems] = useState(localItems);

    const handleChange = (e) => {
        localStorage.setItem('items', e.target.value);
        setItems(e.target.value);
        console.log(setItems(e.target.value))
    }

    return (
        <Fragment>
            <h1>Testingin</h1>
                <form>
                    <lable>
                        <textarea 
                        rows="5"
                        name="items"
                        value={items}
                        onChange={handleChange}
                        />
                        
                    </lable>
                </form>
            {/* <Home />
            <Inventory /> */}
        </Fragment>
    )
}


 

