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
        props.submitHandler({
            category
        }).then(() => {

        })
    } 

    return (
        <Fragment>
            <div className="page-container">
                <h1 className="page-title">New Item </h1>
            </div>

            <div className="form-container">
                <form action="action_page.php">
                    <div className="form-row">
                        <lable 
                            onSubmit={handleSubmit}
                            className="form-label"
                            >
                            Item Name: 
                        </lable>         
                        <input 
                            type="text"
                            placeholder="Enter item name"
                            value={name}
                            onChange={e => setName(e.target.value)} 
                        />
                  
                    </div>

                    <div className="form-row">
                        <lable 
                            onSubmit={handleSubmit}
                            className="form-label">
                                Location:  
                        </lable>         
                        <input 
                            type="text"
                            placeholder="Enter the items location"
                            value={location}
                            onChange={e => setLocation(e.target.value)} 
                        />
                    </div>
                
                {/* TO DO: fix drop down to pass state... also to have placeholder to pick dropdown */}
                    <div className="form-row">
                        <label
                            for="category"
                            className="form-label">
                            Food Category
                        </label>
                        </div>
                        <select id="food-category" name="food-category">
                            <option 
                                value={category}
                                onSubmit={handleSubmit}
                                onChange={e => setCategory(e.target.value)
                                }>This needs to be a placeholder, not a selection!
                            </option>
                            <option value="refrigerated"> Refrigerated</option>
                            <option value="pantry-items"> Pantry Items/Dry Goods</option>
                            <option value="frozen">Frozen</option>
                        </select>
               
                    
                    <div className="form-row">
                        <lable onSubmit={handleSubmit}>
                            Amount/Volume:   
                        </lable>         
                        <input 
                            type="text"
                            value={amount}
                            onChange={e => setAmount(e.target.value)} 
                        />
                    </div>
                
                    <div className="form-row">
                        <lable onSubmit={handleSubmit}>
                        Expiry Date:    
                        </lable>         
                        <input 
                            type="text"
                            value={expiry}
                            onChange={e => setExpiry(e.target.value)} 
                        />
                    </div>

                <input type="submit" value="Submit"/>
                </form>
                
            </div>
            
        </Fragment>
    );
}
