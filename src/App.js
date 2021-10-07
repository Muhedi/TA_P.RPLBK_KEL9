import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Container } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import film from './Komponen/film/film';
import { Home } from './Komponen/home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  return (
    <div className="App">
      {/* <header className="App-header">
        <h2>Daftar Makanan Khas Pati</h2>
        <Detail />
      </header> */}
      <BrowserRouter>
        <Container>
          <Navbar collapseOnSelect className="Navbar " expand="lg">
            <Container height="5000">
              <Navbar.Brand href="/">
                <img src="https://i.ibb.co/9c5tFrS/LOGO1.png" width="420" height="120" className="d-inline-block align-center" alt="React Bootstrap logo" />
                
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link className="text-navbar" href="/">
                    <h3 className="nav-a">HOME</h3>
                  </Nav.Link>
                  <Nav.Link className="text-navbar" href="https://172.105.121.16/">
                    <h3 className="nav-a">DATABASE FILM</h3>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/film" exact component={film} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
