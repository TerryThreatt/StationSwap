import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const NavBar = props => {

    return (
        <div>
            <Navbar color="info" dark>
                <NavbarBrand>{ props.title }</NavbarBrand>
            </Navbar>
        </div>
    )

}

export default NavBar
