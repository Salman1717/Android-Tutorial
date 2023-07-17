
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navbar.css';

function Navbartop() {
  return (
    <Navbar className="nav" bg="light" expand="lg">
      <Container fluid>
        <ul id ="Nav_menu"></ul>
        <Navbar.Brand href="/" ><img className="logo" src="https://www.svgrepo.com/show/217740/android.svg"/> Android Tutorial</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}  
            navbarScroll
          >
            <Nav.Link  className="hm" href="/">Home</Nav.Link>
            <Nav.Link   className="hm" href="download">Download</Nav.Link>
            <Nav.Link  className="hm" href="kotlin" >
              Learn Kotlin
            </Nav.Link>
            <Nav.Link  className="hm" href="example" >
              Examples
            </Nav.Link>
            
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbartop;