import React from 'react';
import { Navbar, Container, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

/**  
 * MainNav Component 
 */
class MainNav extends React.Component{
  /** Constructor */
  constructor(props, context){
    super(props, context);
    this.setInitialState();
  }

  /** Render the component */
  render(){
    return (
      <Navbar id="mainNav" light fixed="top" toggleable className="navbar-expand-lg">
        <Container style={{width:'100%'}}>
          <NavbarBrand href="#">
            <img src="/assets/images/logo-white.svg" style={{width: 50, cursor: 'pointer'}} className="d-lg-block d-sm-none"/>
            <img src="/assets/images/logo-gray.svg" style={{width: 50, cursor: 'pointer'}} className="d-sm-block d-lg-none"/>
          </NavbarBrand>
          <NavbarToggler right onClick={() => this.toggle()}/>
          <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar className="ml-auto" id="navbarResponsive">
            <NavItem><NavLink href="#">Login</NavLink></NavItem>
          </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }

  /** Set the initial state of the component */
  setInitialState(){
    this.state = { 
      isOpen: false 
    };
  }

  /** 
   * Toggle the open state
   * open state only really applies to when 
   * NavbarToggler is displayed [on smaller window widths]
   */
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

} 

export default MainNav;