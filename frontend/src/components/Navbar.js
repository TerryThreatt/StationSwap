import React from 'react'
import {Navbar as Navi, NavbarBrand, NavLink, NavItem, Nav} from 'reactstrap'


const Navbar = () => {
    return (
        <div>
            <Navi color="info" dark lg >
                <NavbarBrand href="/">StationSwap</NavbarBrand>
                <Nav float-right navbar>
                    <NavItem>
                    <NavLink href="/signin" >Login</NavLink>
                    </NavItem>
                </Nav>
            </Navi>
        </div>
    )
}

export default Navbar