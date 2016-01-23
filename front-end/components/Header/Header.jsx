const {MenuItem, Nav, NavDropdown, NavItem, Navbar, Button} = bootstrap;

Header = React.createClass({
  render() {
    return (
      <Navbar brand='FIFA Fantasy' fluid={true} inverse toggleNavKey={0}>
        <Nav eventKey={0} right>
          {/* This is the eventKey referenced */}
          <NavItem eventKey={1} href='/'>Home</NavItem>
          <NavItem eventKey={2} href='/about'>About</NavItem>
        </Nav>
      </Navbar>
    );
  }
});
