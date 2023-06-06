import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

export default function SelectField_common({ label, placeholder, values }) {
    const [selectField, setselectField] = useState('sd');

    const handleChange = (event) => {
        setselectField(event.target.value);
    };

    return (

        <FormControl fullWidth>
            {/* <InputLabel id="demo-simple-select-label">selectField</InputLabel> */}
            <Select
                value={selectField}
                label={label}
                onChange={handleChange}
                color="secondary"
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>

    );
}