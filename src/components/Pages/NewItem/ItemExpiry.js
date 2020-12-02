import React, {useState} from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default function ItemExpiry() {
    const [startDate, setStartDate] = useState(new Date());

    return (
        <DatePicker 
            dateFormat="dd/MM/yyyy"
            selected={startDate} 
            onChange={date => setStartDate(date)}
            // placeholderText="Select a date here"
            />
    );
};