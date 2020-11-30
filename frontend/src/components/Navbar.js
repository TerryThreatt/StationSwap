import React from 'react'
import {Navbar as Navi, NavbarBrand, NavItem, Nav} from 'reactstrap'
import { Link } from 'react-router-dom'


const NavBar = props => {
    return (
        <div>
            <Navi color="info" dark lg >
                <NavbarBrand href="/">StationSwap</NavbarBrand>
                <Nav float-right navbar>
                    <NavItem>
                    <Link to="/signin" >Login</Link>
                    </NavItem>
                </Nav>
            </Navi>
        </div>
    )
}

export default NavBar