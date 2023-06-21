import React from "react";
import styled from "styled-components";
import colors from "../../utils/style/colors";

// const BannerWrapper = styled.div`
//   position: relative;
//   width: 77.5rem;
//   height: 14.5rem;
//   margin: auto;
//   margin-top: 60px;
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   & ::before {
//     content: "";
//     position: absolute;
//     background-image: url(homeBanner.jpg);
//     inset: 0;
//     background-position: center;
//     background-size: cover;
//     border-radius: 1.5rem;
//     z-index: 0;
//     /* opacity: 0.75; */
//     filter: brightness(50%);
//   }
// `;

// const BannerTitle = styled.h1`
//   /* border: 2px solid yellow; */
//   z-index: 1;
//   color: ${colors.secondary};
// `;

const BannerWrapper = styled.div`
  background-image: url(homeBanner.jpg);
  background-position: center;
  background-size: cover;
  border-radius: 1.5rem;
  filter: brightness(50%);
  /* position: relative; */
  /* opacity: 0.75; */
  width: 77.5rem;
  height: 14.5rem;
  margin: auto;
  margin-top: 60px;
  margin-bottom: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
`;

const BannerTitle = styled.p`
  /* position: absolute; */
  z-index: 1;
  color: ${colors.secondary};
  font-size: 48px;
`;

function Banner() {
  return (
    <BannerWrapper>
      <BannerTitle>Chez vous, partout et ailleurs</BannerTitle>
    </BannerWrapper>
  );
}

export default Banner;
