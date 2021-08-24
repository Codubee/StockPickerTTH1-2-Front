import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import Weather from './Weather';

const NavigationBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="secondary" light expand="md">
        <NavbarBrand href="/">Stock Picker</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/match">Match</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/Codubee/StockPickerTTH1-2-Front" target="_blank"><h5 className="github-link">FrontEndGitHub</h5></NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="https://github.com/Codubee/StockPickerTTH12-1-Back" target="_blank"><h5 className="github-link">BackEndGitHub</h5></NavLink>
              </NavItem>
          </Nav>
          <NavbarText><Weather/></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
