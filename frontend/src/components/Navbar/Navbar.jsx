import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import Button from "../Button";
import Container from "../Container";

const Navbar = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <span className="header__brand">
          <Logo className="header__logo" /> Funkie
        </span>
        <Button
          className="header__github-button"
          href="https://github.com/Showrin/drf-react-aws-deployment"
          target="_blank"
          type="ghost"
        >
          <Github />
          Give a Star
        </Button>
      </Container>
    </header>
  );
};

export default Navbar;
