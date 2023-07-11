import { StyledHeaderDiv, StyledAddNewTransaction, StyledBudgetApp, StyledSignIn, StyledI } from "./headerStyle";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeaderDiv>
      <StyledBudgetApp>
        <i className="fa-solid fa-chart-pie" style={{ color: "#764920" }}></i> Budget App
      </StyledBudgetApp>
      <Link to={"/addnewtransaction"}>
        <StyledAddNewTransaction>Add New Transaction</StyledAddNewTransaction>
      </Link>
      <StyledSignIn>
        <StyledI className="fa-solid fa-user fa-2xl" style={{ color: "#764920" }}></StyledI>
      </StyledSignIn>
    </StyledHeaderDiv>
  );
};

export default Header;
