import React, { Fragment } from 'react';
import Table from './Table'

import '../Pages.css'

export const Inventory = (props) => {

    console.log(props)

    return (
        <Fragment>
            <div className="page-container">
                <h1 className="page-title">Pantry Inventory</h1>
            </div>
            <div className="container">
                <p>list table coming soon of all items, make sure has sorting capacity</p>
                
            <table className="table">
                <thead className="table-header">
                    <tr>
                        <th>Name </th>
                        <th>Category </th>
                        <th>Location</th>
                        <th>Amount </th>
                        <th>Expiry</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item) => {
                     
                        return (
                            <tr key={item._id}>
                                <th>{item.name}</th>
                                <th>{item.category}</th>
                                <th>{item.location}</th>
                                <th>{item.amount}</th>
                                <th>{item.expiry}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
  

        </Fragment>
    );
}
