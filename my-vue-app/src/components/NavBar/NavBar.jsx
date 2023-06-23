import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Icons from '../Icons/Icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink,useLocation } from 'react-router-dom';
import { useContext , useEffect} from 'react';
import { cartContext } from '../../context/cartContext';

function NavBarPrincipal({ color }) {

  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Navbar color={color} className="d-flex align-top" bg="warning" expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href=""><NavLink to="/" className="nav-link">
                <img className='logoSize' src="/ypflogo.png" alt="logo" style={{ height: "29px" }} />
              </NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link>
              
            </Nav.Link>
            <Nav.Link>
              <NavLink className="nav-link" to="/category/Lubricantes">Lubricantes</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="nav-link" to="/category/Filtros">Filtros</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink className="nav-link" to="/category/Complementarios">Complementarios</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidget />
        <Link to='/cart'>
          <Icons icon={faCartShopping} />
        </Link>
      </Container>
    </Navbar>
  );
}

function CartWidget() {
  const { countItems } = useContext(cartContext);

  if (countItems() === 0) {
    return null;
  }

  return (
    <div>
      <span>{countItems()}</span>
    </div>
  );
}

export default NavBarPrincipal;
