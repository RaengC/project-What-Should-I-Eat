import React, { Fragment, useState, useMemo } from "react";
import Moment from 'moment';

import '../Pages.css'

export const FindFood = (props) => {
    const { items } = props;
 
    const [sortConfig, setSortConfig] = useState({});
    
    // need to pass useMemo function to display the change on the DOM
    const sortedItems = useMemo( () => {
        let sortedItems = [...items];
        console.log(sortedItems)
       
        // if (sortConfig !== null) {
        //     sortedItems.sort((a, b) => {
        //         if (a[sortConfig.key] < b[sortConfig.key]) {
        //             return sortConfig.direction === 'ascending' ? -1 : 1;
        //         }
        //         if (a[sortConfig.key] > b[sortConfig.key]) {
        //             return sortConfig.direction === 'ascending' ? 1 : -1;
        //         }
        //         return 0;
        //     });
        // }
        return sortedItems;
    }, [items, sortConfig]);
    
    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <Fragment>
            <div className="page-container">
                <h1 className="page-title">Food To Eat</h1>
            </div>
            <div className="container">
                <p>Items sorted by expiry</p>
                
            <table className="table">
                <thead className="table-header">
                    <tr>
                        <th>
                        Name
                            {/* <button 
                                type="button" 
                                // onClick={ () => requestSort('name')}
                                >
                            Name 
                            </button> */}
                        </th>
                        <th> Category
                            {/* <button 
                                type="button" 
                                // onClick={ () => requestSort('category')}
                                >
                            Category 
                            </button> */}
                        </th>
                        <th> Location
                            {/* <button type="button" 
                            // onClick={ () => requestSort('location')}
                            >
                            Location 
                            </button> */}
                        </th>
                        <th> Amount
                            {/* <button type="button" 
                            // onClick={ () => requestSort('amount')}
                            >
                            Amount 
                            </button> */}
                        </th>
                        <th>Expiry
                            <button type="button" 
                            onClick={ () => requestSort('expiry')}
                            >
                            Expiry 
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* map limited to 10 items, but need to only disply closest to expiry */}
                    {sortedItems.slice(0, 10).map((item) => {
                        // console.log('items', item)
                        // Change date format for display
                        const date = Moment(item.expiry).format('Do MMM YY')
                        // console.log(date)
                        return (
                            <tr key={item.id}>
                                <th>{item.name}</th>
                                <th>{item.category}</th>
                                <th>{item.location}</th>
                                <th>{item.amount}</th>
                                <th>{date}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        </Fragment>
    )
}
