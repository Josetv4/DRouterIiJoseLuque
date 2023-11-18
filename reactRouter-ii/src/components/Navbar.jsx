import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';


export default function CustomNavbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

    return (
        <Navbar className="custom-navbar">
            <Container>
                <Navbar.Brand><img
                    src="/logoPoke.png"
                    alt="Logo"
                    height="30"
                    className="d-inline-block align-top white-logo"/>
                </Navbar.Brand>
                <Nav>
                    <NavLink className={`nav-link ${setActiveClass}`} to="/">
                        Home
                    </NavLink>
                    {" - "}
                    <NavLink className={`nav-link ${setActiveClass}`} to="/pokemones">
                        Pokemones
                    </NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
}
