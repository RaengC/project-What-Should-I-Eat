import React, { Fragment } from "react";
import Moment from 'moment';

import '../Pages.css'

export const FindFood = (props) => {
    // LocalStorage passed from App.js
    const { items } = props;
    
    // Sorts Items by expiry date for display
    let sortedItems = [...items];
    sortedItems.sort((a, b) => {
        if (a.expiry < b.expiry) {
            return -1
        }
        if (a.expiry > b.expiry) {
            return 1
        }
        return 0;
    });

    const deleteHandler = (id) => {
        console.log(id)
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
                <h1 className="page-title">Food To Eat</h1>
            </div>
            <div className="container">
                <p>Your top 10 items to eat before expiry. Click the ✓ button to remove. </p>
                <br></br>
                
            <table className="table">
                <thead className="table-header">
                    <tr>
                        <th> Name </th>
                        <th> Category </th>
                        <th> Location </th>
                        <th> Amount </th>
                        <th>Expiry </th>
                        <th>Delete </th>
                    </tr>
                </thead>
                <tbody className="table-body">
                    {sortedItems.slice(0, 10).map((item) => {
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
                                {/* <th><Link to={`/edit/${item}`} >Edit</Link></th> */}
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
    )
}
