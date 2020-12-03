import React, { Fragment, useState, useMemo } from 'react';
import Moment from 'moment';

import '../Pages.css'

export const Inventory = (props) => {
    let { items } = props;
    // if no items in inventory, set local storage to an empty array 
    if (!items) {
        items = []
    } 
    const [sortConfig, setSortConfig] = useState({});

    // need to pass useMemo function to display the change on the DOM
    const sortedItems = useMemo( () => {
        let sortedItems = [...items];
        if (sortConfig !== null) {
            sortedItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sortedItems;
    }, [items, sortConfig]);
    
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const deleteHandler = (id) => {
        // pop up to confirm if want to delete
        
        // Filter through props 'items' array, to find ID clicked
        const updateStorage = items.filter(item => item.id !== id);
        console.log('updateStorage', updateStorage) //removes item clicked, consoles new array!!

        // Delete orginal local storage and replace with above
        const deletedItem = localStorage.setItem('items', JSON.stringify(updateStorage));
        console.log(deletedItem);
        // refreshes the page once change confirmed
        window.location.reload()
        
        return    
    }


    return (
        <Fragment>
            <div className="page-container">
                <h1 className="page-title">Pantry Inventory</h1>
            </div>
            <div className="container">

                <p>Your complete pantry. Sort by any value by clicking name in header.</p>
                <p>Click the ✓ button to remove.</p>
                <br></br>
            <table className="table">
                <thead className="table-header">
                    <tr>
                        <th onClick={ () => requestSort('name')}
                            type="button" 
                            className="header-btn">
                            Name
                        </th>
                        <th 
                            type="button" 
                            className="header-btn"
                            onClick={ () => requestSort('category')}>
                            Category
                        </th>
                        <th 
                            type="button" 
                            className="header-btn"
                            onClick={ () => requestSort('location')}>
                            Location
                        </th>
                        <th 
                            type="button" 
                            className="header-btn"
                            onClick={ () => requestSort('amount')}>
                            Amount
                        </th>
                        <th
                            type="button" 
                            className="header-btn"
                            onClick={ () => requestSort('expiry')}>
                            Expiry
                        </th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {sortedItems.map((item) => {
                        // console.log('items', item)
                        // Change date format for display
                        const date = Moment(item.expiry).format('Do MMM YY')
                        // console.log(date)
                        return (
                            <tr className="table-row"
                                key={item.id}>
                                <th>{item.name}</th>
                                <th>{item.category}</th>
                                <th>{item.location}</th>
                                <th>{item.amount}</th>
                                <th>{date}</th>
                                <th>
                                    <button 
                                        className="delete-btn"
                                        onClick={() => deleteHandler(item.id)}
                                    >
                                    ✓</button>
                                </th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </Fragment>
    );
}
