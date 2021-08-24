import React from "react";
import "./App.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Users from "./pages/Users";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to="/">Navbar</Link>
            </Navbar.Brand>

            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>

              <Link className="nav-link" to="/about">
                About
              </Link>

              <Link className="nav-link" to="/users">
                Users
              </Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
