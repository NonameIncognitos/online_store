import React, { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { SHOP_ROUTE } from "../utils/consts";
import { Button } from 'react-bootstrap'
import { observable } from "mobx";



const NavBar = observable(() => {
    const { user } = useContext(Context);
    return (

        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>BuyDevice</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white', fontFamily: 'monospace' }}>
                        <Button variant={'outline-light'}>Адмиин панель</Button>

                        <Button variant={'outline-light'}>Войти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white', fontFamily: 'monospace' }}>

                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(false)}>Авторизация</Button>
                    </Nav>
                }


            </Container>
        </Navbar>
    )

});

export default NavBar;
