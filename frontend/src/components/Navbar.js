import React from 'react'
import {AppBar, Typography, Button, Toolbar, IconButton} from '@material-ui/core'

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" >
                StationSwap
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar