import React from 'react'
import TextField from '@mui/material/TextField';


export default function Textarea_common({ lable, rows, register, name, validations, error }) {
    return (
        <>
            <TextField
                fullWidth
                error={error}
                label={lable}
                multiline
                rows={rows}
                color="secondary"
                {...register(name, validations)}
            />
        </>
    )
}
