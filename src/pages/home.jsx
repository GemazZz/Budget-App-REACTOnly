import "../App.css";
import Header from "../components/header";
import Filter from "../components/filter";
import PrintData from "../components/printData";
import { StyledStatsDiv } from "../components/styles/statsStyle";
import { styled } from "styled-components";

const StyledMainDiv = styled.div`
  width: 100vw;
  position: relative;
  display: flex;
  gap: 20px;
  height: min(90vh);
`;

const Home = () => {
  return (
    <>
      <Header />
      <StyledMainDiv>
        <Filter />
        <PrintData />
        <StyledStatsDiv />
      </StyledMainDiv>
    </>
  );
};

export default Home;
