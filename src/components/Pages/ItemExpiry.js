import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const ItemExpiry = (props) => {
    const startDate = new Date();

    return (
        <DatePicker 
            dateFormat="dd/MM/yyyy"
            selected={startDate} 
            onChange={props.onChange} 
            />
    );
};