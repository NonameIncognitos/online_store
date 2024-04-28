import React, { useContext } from "react";
import { Context } from "..";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from 'react-bootstrap';
import { observer } from "mobx-react"; // Импортируем observer из MobX Reac
import { useNavigate } from "react-router-dom";
const NavBar = observer(() => {
    const { user } = useContext(Context);
    const history = useNavigate()

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container >
                <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>BuyDevice</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white', fontFamily: 'monospace' }}>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to={ADMIN_ROUTE}
                        >
                            <Button
                                variant={'outline-light'}>Админ панель
                            </Button>
                        </NavLink>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to={LOGIN_ROUTE}>

                            <Button
                                variant={'outline-light'}
                                style={{ marginLeft: '10px' }}> Выйти
                            </Button>
                        </NavLink>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
