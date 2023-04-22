import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Button from "../Button";
import Container from "../Container";

const Navbar = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <span className="header__brand">
          <Logo className="header__logo" /> Funkie
        </span>
        <Button>Post a Quote</Button>
      </Container>
    </header>
  );
};

export default Navbar;
