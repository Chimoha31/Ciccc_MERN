import React from "react";
import "./Header.css";
import { Navbar, Container } from "react-bootstrap";
import logo from "../image/logo.png";

const Header = ({ username, showUsername }) => {
  const handleHome = () => {
    window.location.reload();
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={handleHome} className="header_title">
          <img
            alt=""
            src={logo}
            width="32"
            height="32"
            className="d-inline-block align-top"
          />
          <span className="px-2 header_title">TicTacToe</span>
        </Navbar.Brand>
        {showUsername && (
          <Navbar.Brand className="header_title">
            <span className="px-2 header_username">{username}'s room</span>
          </Navbar.Brand>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
