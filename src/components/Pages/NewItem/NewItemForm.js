import React, { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const NewItemForm = (props) => {

    const [name, setName] = useLocalStorage('name', '');
    const [category, setCategory] = useLocalStorage('category', '');
    const [location, setLocation] = useLocalStorage('location', '');
    const [amount, setAmount] = useLocalStorage('amount','');
    const [expiry, setExpiry] = useLocalStorage('expiry', '');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, location, amount, expiry);

        // Passed to parent, NewItem to store as object in local storage array. 
        props.onSubmit({
            id: Math.random(),
            name, 
            category, 
            location,
            amount,
            expiry
        });

        // Clears form on submit
        setName('')
        setCategory('')
        setLocation('')
        setAmount('')
        setExpiry('')
    }; 

    // Local Storage 
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

    return (
        <Fragment>
            <form onSubmit={handleSubmit} className="container">
                <div className="form-row">
                    <lable className="form-label"> Item Name: </lable>         
                        <input 
                            type="text"
                            placeholder="Enter item name"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)} 
                        />
                </div>

                <div className="form-row">
                    <label className="form-label"> Category </label>
                </div>
                <select 
                    id="food-category" 
                    name="food-category"
                    required
                    value={category}
                    onChange={e => setCategory(e.target.value)}> Select your category
                        {/* <option value={category}> 
                            Select your category
                        </option> */}
                        <option value="Fresh">Fresh/Room Temperature</option>
                        <option value="Fridge"> Refrigerated</option>
                        <option value="Frozen">Frozen</option>
                        <option value="Pantry"> Pantry Items/Dry Goods</option>   
                </select>

                <div className="form-row">
                    <lable className="form-label"> Location: </lable>         
                    <input 
                        type="text"
                        placeholder="Enter location e.g. kitchen fridge, top shelf"
                        required
                        value={location}
                        onChange={e => setLocation(e.target.value)} 
                    />
                </div>               
                    
                <div className="form-row">
                    <lable className="form-label"> Amount/Volume: </lable>         
                    <input 
                        type="text"
                        placeholder="Enter the size/volume of your item e.g. 1 bunch, 400gm, single chicken breast."
                        required
                        value={amount}
                        onChange={e => setAmount(e.target.value)} 
                    />
                </div>
                
                <div className="form-row">
                    <lable className="form-label">Select Expiry Date: </lable>    
                    <DatePicker 
                        dateFormat="dd/MM/yyyy"
                        selected={expiry} 
                        onChange={date => setExpiry(date)}
                        placeholderText="Select a date here"
                        />
                </div>
                <input type="submit" 
                    className="submit-btn"
                    value="Submit"
                />
            </form>
        </Fragment>
    );
}
