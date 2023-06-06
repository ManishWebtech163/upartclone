import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function PasswordField_common({ label, placeholder, register, name }) {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <OutlinedInput
            fullWidth
            type={showPassword ? 'text' : 'password'}
            endAdornment={
                <InputAdornment position="end" sx={{ padding: "0 1em" }}>
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} edge="end" >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
            label={label}
            placeholder={placeholder}
            {...register}
            color='secondary'
        />

    )
}
