import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar id="Header_Navbar" color="primary" light expand="md">
          <NavbarBrand href="/"
          className="text-white">Conjugator</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/" 
                className="text-white">Verbs</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" 
                className="text-white">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/cristoforo86/" 
                className="text-white">GitHub</NavLink>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}