import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import RegisterForm from '../RegisterForm';
import { IconButton } from '@mui/material';
export default function RegisterFormDrawer({ registerDrawer, setregisterDrawer }) {
    return (
        <div>
            {['right'].map(() => (
                <Drawer
                    anchor='right'
                    open={registerDrawer}
                    onClose={() => { setregisterDrawer(false) }}
                >
                    <div className="drawerContent">
                        <h3 className="heading">
                            <span>Sign up </span>
                            <IconButton aria-label="close" onClick={() => setregisterDrawer(false)}> <CloseIcon /> </IconButton>
                        </h3>
                        <div className="form">
                            <RegisterForm />
                        </div>
                    </div>
                </Drawer>
            ))}
        </div>
    )
}
