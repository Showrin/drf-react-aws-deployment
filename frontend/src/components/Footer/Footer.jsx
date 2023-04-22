import React from "react";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer__container">
        Made by &nbsp;
        <a
          href="https://www.showrin.com/"
          target="_blank"
          referrerPolicy="noreferer"
        >
          Showrin Barua
        </a>
        &nbsp; with ❤️
      </Container>
    </footer>
  );
};

export default Footer;
