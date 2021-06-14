import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'
import { Link } from 'react-router-dom'

const NavBar = props => {

    return (
        <div style={{fontSize: 18, aLink: 'fff'}}>
            <Navbar color="info" dark>
                <NavbarBrand>{ props.title }</NavbarBrand>
                <Link to="/">Home</Link>
                <Link to="/laptops">Laptops</Link>
                <Link to="/rentals">Rentals</Link>
                <Link to="/rentals/new">Add Rental</Link>
            </Navbar>


        </div>
    )

}

export default NavBar
