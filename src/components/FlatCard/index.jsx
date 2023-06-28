import { styled } from "styled-components";
import colors from "../../utils/style/colors.js";
/* eslint-disable react/prop-types */

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
function FlatCard({ flatInfo }) {
  return (
    <CardContainer key={flatInfo.id}>
      <CardImage src={flatInfo.cover} alt="image appartement" />
      <CardTitle>{flatInfo.title}</CardTitle>
    </CardContainer>
  );
}

export default FlatCard;
