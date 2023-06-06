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
import RegisterFormDrawer from './RegisterFormDrawer';
import LoginFomePopup from './LoginFomePopup';

export default function Navbar() {
    const [navActive, setnavActive] = useState(false)
    // --floating container--
    const [floatingContainer, setfloatingContainer] = useState(false)
    // --register popup state--
    const [registerDrawer, setregisterDrawer] = useState(false);
    // --login popup state--
    const [loginPopup, setloginPopup] = useState(false);


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const floatingContainerFun = () => {
        setfloatingContainer(true)
    }

    return (
        <nav className='navbar'>
            <div className="container containerExtraBig ">
                <div className="items">

                    <span className="icon"><img src="./images/Up-part-logo.png" alt="upartIcon" /></span>

                    <div className={`links ${navActive && "navActive"}`}>
                        <a href="/" onMouseEnter={floatingContainerFun} onMouseLeave={() => setfloatingContainer(false)}>Artist</a>
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
                        <a onClick={() => setloginPopup(true)}>Login</a>
                        <a onClick={() => setregisterDrawer(true)}>Register</a>
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
                {/* ----floatingContainer, setfloatingContainer, floatingContainerFun---- */}
                <FloatingContainer floatingContainer={floatingContainer} setfloatingContainer={setfloatingContainer} floatingContainerFun={floatingContainerFun} />
            </div>

            {/* ---register drawer--- */}
            <RegisterFormDrawer registerDrawer={registerDrawer} setregisterDrawer={setregisterDrawer} />
            {/* ---login form popup--- */}
            <LoginFomePopup loginPopup={loginPopup} setloginPopup={setloginPopup} />
        </nav>
    )
}





// -----floatingContainer------

const FloatingContainer = ({ floatingContainer, setfloatingContainer, floatingContainerFun }) => {
    return (
        <div className={`floatingContainer ${floatingContainer && "floatingContainerActive"}`} onMouseEnter={floatingContainerFun}>
            <div className="content" onMouseLeave={() => setfloatingContainer(false)}>
                {/* --list-- */}
                <div className="list">
                    <ul>
                        <li><span> first </span> <span>></span></li>
                        <li><span> first </span> <span>></span></li><li><span> first </span> <span>></span></li><li><span> first </span> <span>></span></li>
                    </ul>
                </div>
                {/* --details-- */}
                <div className="details">

                    <h3>All Categories</h3>
                    <p className="pera">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda nulla debitis adipisci nesciunt corrupti numquam corporis porro impedit repellendus fugit!</p>
                    <a href="#">Browse all</a>

                </div>
                {/* --cards-- */}
                <div className="cards">

                    <div className="card">
                        <img src="./images/homePage/cateogories/makeUp.svg" alt="" />
                        <p className="title">Lorem, ipsum.</p>
                    </div>
                    <div className="card">
                        <img src="./images/homePage/cateogories/makeUp.svg" alt="" />
                        <p className="title">Lorem, ipsum.</p>
                    </div>
                    <div className="card">
                        <img src="./images/homePage/cateogories/makeUp.svg" alt="" />
                        <p className="title">Lorem, ipsum.</p>
                    </div>
                    <div className="card">
                        <img src="./images/homePage/cateogories/makeUp.svg" alt="" />
                        <p className="title">Lorem, ipsum.</p>
                    </div>
                    <div className="card">
                        <img src="./images/homePage/cateogories/makeUp.svg" alt="" />
                        <p className="title">Lorem, ipsum.</p>
                    </div>

                </div>

            </div>
        </div>
    )
}
