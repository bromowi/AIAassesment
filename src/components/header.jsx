import React from 'react'
import { NavbarBrand, Col, Container, Image, Navbar, Form, FormControl, NavLink, Button, } from 'react-bootstrap'
import logo from '../components/asset/logo.png'
import "./header.css"
const Header = () => {

    let serachTerm = ''

    const handleSearch = () => {
        localStorage.setItem('serachTerm', serachTerm)
    }

    return (
        <div className='navbar'> 

                <Navbar>
                <NavbarBrand href='/'>
                    <Image className='logo' src={logo}  />
                </NavbarBrand>
                </Navbar>    
        </div>
    )
}

export default Header;