import React from "react";
import Header from "../../components/Header/index.jsx";
import Banner from "../../components/Banner/index.jsx";
import FlatCard from "../../components/FlatCard/index.jsx";
import Footer from "../../components/Footer/index.jsx";
import Logement from "../../datas/logements.json";
import styled from "styled-components";
import colors from "../../utils/style/colors.js";

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

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <MainContainer>
        {Logement.map((logement) => {
          return <FlatCard flatInfo={logement} key={logement.id} />;
        })}
      </MainContainer>
      <Footer />
    </div>
  );
}

export default Home;
