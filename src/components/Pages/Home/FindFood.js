import { Fragment } from "react";
import React from 'react';

import '../Pages.css'

export const FindFood = (props) => {

    return (
        <Fragment>
            <div className="page-container">
                <h2 className="page-title">You need to eat...</h2>
            </div>
            
            <div className="container">
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
    )
}
