import React, { Fragment } from 'react';
import DatePicker from 'react-datepicker';

import '../Pages.css'


export const Inventory = (props) => {

    console.log(props)

    return (
        <Fragment>
            <div className="page-container">
                <h1 className="page-title">Pantry Inventory</h1>
            </div>
            <div className="container">list table coming soon of all items, make sure has sorting capacity</div>

            {/* <div>
                {props.items.map( (s) => ( <p key={s.id}>Name:{s.name}</p>))}
            </div> */}
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

        </Fragment>
    );
}
