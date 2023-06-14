import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Icons from '../Icons/Icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link,NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { cartContext } from '../../context/cartContext';




function NavBarPrincipal({color},) {
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
            navbarScroll  >
   <Nav.Link>  <NavLink to="/" > <img className='logoSize' src="/ypflogo.png" alt="logo" />  </NavLink></Nav.Link>
       
       {/*    <Nav.Link href="/"><img className='logoSize' src="../public/ypflogo.png" alt="" /></Nav.Link>*/} 
        {/*    <Nav.Link href="/product">Link</Nav.Link> */} 
         <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item ><NavLink className="nav-link" to="/category/Lubricantes" >Lubricantes</NavLink></NavDropdown.Item>
              <NavDropdown.Item ><NavLink className="nav-link" to="/category/Filtros" >Filtros</NavLink>
               
              </NavDropdown.Item>
             
              <NavDropdown.Item><NavLink className="nav-link"  to="/category/Complementarios" >Complementarios</NavLink>
                
              </NavDropdown.Item>
            </NavDropdown>
           {/* <Nav.Link href="#" disabled>   
              Link
            </Nav.Link>*/}
          </Nav>
      
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              
            />
            <Button  variant="outline-success">Buscar</Button>
          </Form> 
        </Navbar.Collapse>
      </Container>
      <CartWidget></CartWidget>
      <Icons icon={faCartShopping}/>
    </Navbar>

  );
}

function CartWidget () {
  const {countItems} = useContext (cartContext)
  return (
    <div>
      <span>{countItems()}</span>
    </div>
  )
}

export default NavBarPrincipal;