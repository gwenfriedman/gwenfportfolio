import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import {Link} from "react-router-dom";
import header from './images/Header.png';
import './Home.css';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <div>
        <img src={header} className='header-img'/>
      </div>
      <Navbar light expand="md" className='nav'>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Link to={`/graphicart`}>
                <NavItem>
                  <NavLink href="/graphicart/">Poster Design</NavLink>
                </NavItem>
            </Link>

            <Link to={`/drawings`}>
                <NavItem>
                  <NavLink href="/drawings/">Digital Drawings</NavLink>
                </NavItem>
            </Link>

            <Link to={`/webdesign`}>
                <NavItem>
                  <NavLink href="/webdesign">Web Design</NavLink>
                </NavItem>
            </Link>

            <Link to={`/sewing`}>
                <NavItem>
                  <NavLink href="/sewing">Sewing</NavLink>
                </NavItem>
            </Link>

            <Link to={`/embroidery`}>
                <NavItem>
                  <NavLink href="/Embroidery">Embroidery</NavLink>
                </NavItem>
            </Link>

            <Link to={`/branding`}>
                <NavItem>
                  <NavLink href="/branding">Branding</NavLink>
                </NavItem>
            </Link>

            <Link to={`/photography`}>
                <NavItem>
                  <NavLink href="/photography">Photos</NavLink>
                </NavItem>
            </Link>

            <Link to={`/about`}>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
            </Link>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;