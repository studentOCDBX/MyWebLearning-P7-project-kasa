import React from "react";
import Navbar from "../Navbar/index.jsx";
import { styled } from "styled-components";

const HeaderWrapper = styled.div`
  width: 77.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2.5rem;
  padding-inline: 6.25rem;
`;

const LogoContainer = styled.div`
  width: 211px;
  height: 68px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <LogoContainer>
        <img src="LOGO.png" alt="kasa logo" />
      </LogoContainer>
      <Navbar />
    </HeaderWrapper>
  );
}

export default Header;
