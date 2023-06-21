import React from "react";
// import "../../styles/App.css";
import Header from "../../components/Header/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import FlatCard from "../../components/FlatCard/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Logement from "../../datas/logements.json";
import styled from "styled-components";
import colors from "../../utils/style/colors.js";

// const MainContainer = styled.div`
//   width: 77.5rem;
//   margin: auto;
//   margin-top: 50px;
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-evenly;
//   background: ${colors.greylightBackground};
//   border-radius: 1.5rem;
// `;

// const CardContainer = styled.div`
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   width: 21.25rem;
//   height: 21.25rem;
//   border-radius: 10px;
//   margin-top: 3.5rem;
//   background: ${colors.primary};
// `;

// const CardImage = styled.img`
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 10px;
// `;

// const CardTitle = styled.h2`
//   position: absolute;
//   width: 50%;
//   left: 15px;
//   bottom: 2.5px;
//   color: ${colors.secondary};
//   font-size: 18px;
//   z-index: 1;
// `;
console.log(Logement);
// ************************************

const MainContainer = styled.div`
  width: 77.5rem;
  margin: auto;
  margin-bottom: 2.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-evenly;
  background: ${colors.greylightBackground};
  border-radius: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.62rem;
  flex-basis: 30%;
`;

const CardImage = styled.img`
  object-fit: cover;
  border-radius: 0.62rem;
  height: 21.25rem;
  width: 100%;
  z-index: 0px;
`;

const CardTitle = styled.h2`
  position: absolute;
  width: 50%;
  left: 15px;
  bottom: 2.5px;
  color: ${colors.secondary};
  font-size: 18px;
  z-index: 1;
`;

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <MainContainer>
        {Logement.map((logement) => {
          return (
            <CardContainer key={logement.id}>
              <CardImage src={logement.cover} alt="image appartement" />
              <CardTitle>{logement.title}</CardTitle>
            </CardContainer>
            // <FlatCard />
          );
        })}
      </MainContainer>
      <Footer />
    </div>
  );
}

export default Home;
