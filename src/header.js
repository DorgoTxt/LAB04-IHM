import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header= (header) => {
    return (<header class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" className='text-light'>Cotiza tu PC Ya!!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto ">
            <Nav.Link href="#home" className='text-light'>Inicio</Nav.Link>
            <Nav.Link href="#link" className='text-light'>Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='bg-primary'>
              <NavDropdown.Item href="#action/3.1" className='text-dark bg-primary'>Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className='text-dark bg-primary'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className='text-dark bg-primary'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='text-dark bg-primary'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  </header>);
}

export default Header;

