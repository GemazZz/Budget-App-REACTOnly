import { StyledHeaderDiv, StyledAddNewTransaction, StyledBudgetApp, StyledSignIn, StyledI } from "./styles/headerStyle";
import { Link } from "react-router-dom";

const Header = () => {
  const logOut = () => {
    localStorage.removeItem("id");
  };
  return (
    <StyledHeaderDiv>
      <StyledBudgetApp>
        <i className="fa-solid fa-chart-pie" style={{ color: "#764920" }}></i> Budget App
      </StyledBudgetApp>
      <Link to={"/addtransaction"}>
        <StyledAddNewTransaction>Add New Transaction</StyledAddNewTransaction>
      </Link>
      <StyledSignIn>
        <Link to={"/signin"}>
          <StyledI className="fa-solid fa-user fa-2xl" style={{ color: "#764920" }} />
        </Link>
        <StyledI
          className="fa-solid fa-arrow-right-from-bracket fa-2xl"
          style={{ color: "#bc1f1f" }}
          onClick={() => {
            logOut();
          }}
        />
      </StyledSignIn>
    </StyledHeaderDiv>
  );
};
export default Header;
