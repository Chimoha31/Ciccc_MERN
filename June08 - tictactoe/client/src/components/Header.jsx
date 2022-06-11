import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../image/logo.png";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="32"
            height="32"
            className="d-inline-block align-top"
          />
          <span className="px-2">TicTacToe</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
