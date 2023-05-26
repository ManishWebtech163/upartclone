import { Box, Container, IconButton } from '@mui/material'
import React from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
// ---
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useState } from 'react';

export default function Navbar() {
    const [navActive, setnavActive] = useState(false)

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className='navbar'>
            <div className="container containerExtraBig ">
                <div className="items">

                    <span className="icon"><img src="./images/Up-part-logo.png" alt="upartIcon" /></span>

                    <div className={`links ${navActive && "navActive"}`}>
                        <a href="/">Artist</a>
                        <a href="/">Turotail</a>
                        <a href="/">Photo-gallery</a>
                        <a href="/">deals</a>
                        <a href="/">blogs</a>
                        <a href="/">contact</a>
                    </div>
                    <div className="navBtn">
                        <IconButton sx={{ color: "inherit" }} onClick={() => setnavActive(!navActive)}>
                            <MenuIcon sx={{ color: "inherit" }} />
                        </IconButton>
                    </div>
                    <div className="loginBtn">
                        <a href="/">Login</a>
                        <a href="/">Register</a>
                    </div>
                    <div className="cartBtns">
                        <span className="cart">
                            <IconButton sx={{ color: "inherit" }}>
                                <ShoppingCartOutlinedIcon sx={{ color: "inherit" }} />
                            </IconButton>
                        </span>
                        <span className='rimnder'>
                            <IconButton aria-label="delete" sx={{ color: "inherit" }}>
                                <NotificationsIcon sx={{ color: "inherit" }} />
                            </IconButton>
                        </span>
                        <span className='profile'>

                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ px: 1 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                </IconButton>
                            </Tooltip>

                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={open}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                    elevation: 0,
                                    sx: {
                                        overflow: 'visible',
                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                        mt: 1.5,
                                        '& .MuiAvatar-root': {
                                            width: 32,
                                            height: 32,
                                            ml: -0.5,
                                            mr: 1,
                                        },
                                        '&:before': {
                                            content: '""',
                                            display: 'block',
                                            position: 'absolute',
                                            top: 0,
                                            right: 14,
                                            width: 10,
                                            height: 10,
                                            bgcolor: 'background.paper',
                                            transform: 'translateY(-50%) rotate(45deg)',
                                            zIndex: 0,
                                        },
                                    },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Avatar /> Profile
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <ListItemIcon>
                                        <Logout fontSize="small" />
                                    </ListItemIcon>
                                    Logout
                                </MenuItem>
                            </Menu>
                        </span>
                    </div>

                </div>
                <div className="floatingContainer">
                </div>
            </div>
        </nav >
    )
}
