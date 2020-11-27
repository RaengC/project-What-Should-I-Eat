import React, { Fragment, useState } from 'react';
import './Pages.css'

export function NewItem(props) {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [expiry, setExpiry] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitting Name ${name}`);
    } 

    return (
        <Fragment>
            <div className="page-container">
                <h1 className="page-title">New Item </h1>
            </div>

            <div className="new-item-form">
                <lable onSubmit={handleSubmit}>
                    Name: 
                    <input 
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                    />
                </lable>
                <lable onSubmit={handleSubmit}>
                    Location: 
                    <input 
                        type="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)} 
                    />
                </lable>
                <lable onSubmit={handleSubmit}>
                    Category: 
                    <input 
                        type="text"
                        value={category}
                        onChange={e => setCategory(e.target.value)} 
                    />
                </lable>
                <lable onSubmit={handleSubmit}>
                    Amount/Volume: 
                    <input 
                        type="text"
                        value={amount}
                        onChange={e => setAmount(e.target.value)} 
                    />
                </lable>
                <lable onSubmit={handleSubmit}>
                    Expiry Date: 
                    <input 
                        type="text"
                        value={expiry}
                        onChange={e => setExpiry(e.target.value)} 
                    />
                </lable>
                <input type="submit" value="Submit"/>
            </div>
            
        </Fragment>
    );
}
