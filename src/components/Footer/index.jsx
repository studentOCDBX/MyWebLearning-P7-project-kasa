import React from "react";
import styled from "styled-components";
import logo from "../../assets/FooterLogo.png";

const FooterContainer = styled.div`
  height: 209px;
  margin: auto;
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #000;
  & p {
    color: #fff;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <img src={logo} alt="Logo du footer" />
      <p>© 2020 Kasa. All rights reserved</p>
    </FooterContainer>
  );
}

export default Footer;
