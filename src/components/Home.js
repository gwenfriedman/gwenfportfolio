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

            <NavItem>
              <NavLink href="/webdesign">Web Design</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/sewing">Sewing</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/Embroidery">Embroidery</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/branding">Branding</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/photography">Photos</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;