import PropTypes from 'prop-types'
import TextField from '@mui/material/TextField';


export default function Textarea_common({ lable, rows, register, error }) {
    return (
        <>
            <TextField
                fullWidth
                error={error}
                label={lable}
                multiline
                rows={rows}
                color="secondary"
                {...register}
            />
        </>
    )
}

Textarea_common.propTypes = {
    lable: PropTypes.string,
    rows: PropTypes.node,
    register: PropTypes.object,
    error: PropTypes.string,
}