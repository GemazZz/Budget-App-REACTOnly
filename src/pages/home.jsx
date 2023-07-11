import "../App.css";
import Header from "../components/header";
import Filter from "../components/filter";
import Content from "../components/content";
import { StyledMainDiv } from "../components/mainStyle";
import { StyledStatsDiv } from "../components/statsStyle";

const Home = () => {
  return (
    <>
      <Header />
      <StyledMainDiv>
        <Filter />
        <Content />
        <StyledStatsDiv />
      </StyledMainDiv>
    </>
  );
};

export default Home;
