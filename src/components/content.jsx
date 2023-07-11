import { styled } from "styled-components";
import PrintData from "./printData";
const StyledContentDiv = styled.div`
  margin-top: 20px;
  flex: 2;
  height: min(400px);
`;

const Content = () => {
  return (
    <StyledContentDiv>
      <PrintData />
    </StyledContentDiv>
  );
};

export default Content;
