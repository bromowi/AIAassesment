import React from 'react'
import { NavbarBrand, Col, Container, Image, Navbar, Form, FormControl, NavLink, Button, } from 'react-bootstrap'
import logo from '../components/asset/logo.png'
// import logo2 from '../components/assets/headerimg/docpets2font.png'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./header.css"
const Header = () => {

    let serachTerm = ''

    const handleSearch = () => {
        localStorage.setItem('serachTerm', serachTerm)
    }

    return (
        <div className='navbar'> 

                <Navbar className='bg-header-footer'>
                {/* <Container> */}
                <NavbarBrand href='/'>
                    <Image className='logo' src={logo}  />
                    <h1 className='Nama'>Bromo</h1>
                </NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" className='Navigasi'/>
                <NavbarCollapse id="basic-navbar-nav">     
                    <ul class="list-unstyled">
                            <NavLink clasName='text-lg'>
                                <li className='list'>Home</li>
                            </NavLink>      
                    </ul>           
                </NavbarCollapse>
                <Form inline onSubmit={handleSearch} action='#'>
                        <FormControl type='text' placeholder='Enter Name Clinic' className='mx-auto' width='500px' onChange={e => serachTerm = e.target.value} />
                </Form>
                        <Button className='btn-primary' variant='button'>Login</Button>
                {/* </Container>  */}
            </Navbar>    
        </div>
    )
}

export default Header;