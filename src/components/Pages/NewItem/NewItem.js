import React, { Fragment, useState } from 'react'; 
import { NewItemForm } from './NewItemForm';

import '../Pages.css'

 function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });
    const setValue = value => {
        try {
            const valueToStore =
            value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
}

export const NewItem = (props) => {
    const [items, setItems] = useLocalStorage('items', '');
    const [submitMsg, setSubmitMsg] = useState('');
    // push item object into an array. 
    const addItem = (item) => {
        setItems([...items, item]);
        props.setItems([...items, item]);
    };

    return (
        <Fragment>
            <div className="page-container">
                <h1 className="page-title">New Item </h1>
            </div>
            
            <NewItemForm 
                onSubmit={ addItem } 
            />
        </Fragment>
    )
}



