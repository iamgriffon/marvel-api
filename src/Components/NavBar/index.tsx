import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { Home, ShoppingCart } from "@material-ui/icons";
import { Navbar, Nav } from "react-bootstrap";
import './styles.scss';
import CartDropdown from "../CartDropdown";
import { GlobalCartContext } from "../../Utils/store";

const NavBar = () => {

  const cart = useContext(GlobalCartContext);

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="fixed">
      <Link to='/'>
        <Home className='icon' />
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav>
            <Link to='/list' className='link'>List </Link>
          </Nav>

        </Nav>

        <Nav.Item className="justify-content-end link">
          <ShoppingCart onClick={() => cart.setHidden()} />
        </Nav.Item>

        <Nav.Item>
          <Link to="/checkout" className="justify-content-end link">Checkout</Link>
        </Nav.Item>

        {
          cart.hidden ? (<CartDropdown />) : null
        }
        <div className='counter'>
          <span>{cart.items.length} Items</span>
        </div>

      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavBar;
