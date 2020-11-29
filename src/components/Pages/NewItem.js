import React, { Fragment, useState } from 'react';

import { ItemExpiry } from './ItemExpiry';
import './Pages.css'

export function NewItem(props) {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [amount, setAmount] = useState('');
    const [expiry, setExpiry] = useState('');

const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, location, amount, expiry);
        
        setName('')
        setCategory('')
        setLocation('')
        setAmount('')
        setExpiry('')
    } 

    return (
        <Fragment>
            <div className="page-container">
                <h1 className="page-title">New Item </h1>
            </div>

            <form onSubmit={handleSubmit} className="form-container">
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
                    onChange={e => setCategory(e.target.value)}>
                        <option 
                            value={category}
                            > Select your category
                        </option>
                        <option value="fresh">Fresh/Room Temperature</option>
                        <option value="refrigerated"> Refrigerated</option>
                        <option value="frozen">Frozen</option>
                        <option value="pantry-items"> Pantry Items/Dry Goods</option>
                        
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
                
            {/* TODO: add placeholder for date, tried in ItemExpiry but not workign there either, docs say it should! */}
                <div className="form-row">
                    <lable className="form-label">Select Expiry Date: </lable>    
                    <ItemExpiry 
                        value={expiry}
                        onChange={date => setExpiry(date)} />     
                </div>

                <input type="submit" 
                    className="submit-btn"
                    value="Submit"/>
            </form>
        </Fragment>
    );
}
