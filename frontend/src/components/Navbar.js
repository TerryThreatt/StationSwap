import React from 'react'
import {Navbar as Navi, NavbarBrand, NavLink, NavItem, Nav} from 'reactstrap'


const Navbar = () => {
    return (
        <div>
            {/* <AppBar position="static" bgcolor="253053">
                <Toolbar>
                    <Typography variant="h7">StationSwap</Typography>
                    <Button color="inherit" position="right">Login</Button>
                </Toolbar>
            </AppBar> */}
            <Navi bg-color="253053" light expand="md">
                <NavbarBrand href="/">StationSwap</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink href="/components/">Login</NavLink>
                    </NavItem>
                </Nav>
            </Navi>
        </div>
    )
}

export default Navbar