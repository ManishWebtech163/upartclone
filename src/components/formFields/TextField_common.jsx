import React from 'react'
import TextField from '@mui/material/TextField';
export default function TextField_common({ type, label, placeholder, register, name, validations, error, errorMsg }) {
    return (
        <TextField fullWidth type={type} label={label} placeholder={placeholder} variant="outlined" {...register} color='secondary' error={error} helperText={errorMsg} />
    )
}
