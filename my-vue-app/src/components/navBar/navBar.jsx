import './navBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icons from '../Icons/Icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function NavBarPrincipal({color}) {
  return (
    <Navbar color={color} className="navBarStyle" bg="warning" expand="lg" fixed='top'>
    <Container fluid>
     <Navbar.Brand href="">
      </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Nav.Link href="/"><img className='logoSize' src="../src/assets/ypflogo.png" alt="" /></Nav.Link>
         {/*   <Nav.Link href="/product">Link</Nav.Link> */} 
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/category/Lubricantes">Lubricantes</NavDropdown.Item>
              <NavDropdown.Item href="/category/Filtros">
                Filtros
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/category/Complementarios">
                Complementarios
              </NavDropdown.Item>
            </NavDropdown>
           {/* <Nav.Link href="#" disabled>   
              Link
            </Nav.Link>*/}
          </Nav>
       {/*  <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">buscar</Button>
          </Form>  */}
        </Navbar.Collapse>
      </Container>
      <Icons icon={faCartShopping}/>
    </Navbar>
  );
}

export default NavBarPrincipal;