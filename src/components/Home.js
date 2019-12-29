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




const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Gwen Friedman</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>

            <Link to={`/graphicart`}>
                <NavItem>
                  <NavLink href="/graphicart/">Graphic Art</NavLink>
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