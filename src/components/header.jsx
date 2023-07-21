import { StyledHeaderDiv, StyledAddNewTransaction, StyledBudgetApp, StyledSignIn, StyledI } from "./styles/headerStyle";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const logOut = () => {
    if (!JSON.parse(localStorage.getItem("id"))) {
      return;
    } else {
      localStorage.removeItem("id");
      navigate("/signin");
    }
  };
  const logInCheck = () => {
    if (!JSON.parse(localStorage.getItem("id"))) {
      alert("Log in First");
      navigate("/signin");
      return;
    } else {
      navigate("/addtransaction");
    }
  };
  const signInFunc = () => {
    const UserId = JSON.parse(localStorage.getItem("id"));
    if (UserId) {
      alert("You are ALREADY signed in");
      return;
    } else {
      navigate("/signin");
    }
  };
  return (
    <StyledHeaderDiv>
      <StyledBudgetApp>
        <i className="fa-solid fa-chart-pie" style={{ color: "#764920" }}></i> Budget App
      </StyledBudgetApp>
      <StyledAddNewTransaction onClick={() => logInCheck()}>Add New Transaction</StyledAddNewTransaction>
      <StyledSignIn>
        <StyledI
          className="fa-solid fa-user fa-2xl"
          style={{ color: "#764920" }}
          onClick={() => {
            signInFunc();
          }}
        />
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
