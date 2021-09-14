import React from 'react'
import Menu from '@material-ui/core/Menu'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'
import './NavBar.css';

export default function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className='navbar-home'>
            <div className='navbar-buttons'>
                <Button aria-controls="simple-menu" aria-haspopup="true" variant='outlined' color='secondary' onClick={handleClick}>
                    Open Menu
                </Button>
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    )
}

