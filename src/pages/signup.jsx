import {
  StyledDiv,
  StyledCloseBtn,
  StyledTransactionH1,
  StyledDateLabel,
  StyledSubmitBtn,
  StyledAmountLabel,
  StyledDateInput,
  StyledNumberInput,
  StyledNew,
  StyledForget,
} from "../components/styles/signStyle";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <StyledDiv>
      <Link to={"/"}>
        <StyledCloseBtn>
          <i className="fa-solid fa-xmark fa-2xl" style={{ color: "#764920" }} />
        </StyledCloseBtn>
      </Link>
      <StyledTransactionH1>Create an account</StyledTransactionH1>
      <div>
        <StyledDateLabel htmlFor="Email">Email: </StyledDateLabel>
        <StyledDateInput type="email" id="Email" />
      </div>
      <div>
        <StyledAmountLabel htmlFor="amount">Password: </StyledAmountLabel>
        <StyledNumberInput type="password" id="amount" />
      </div>
      <Link to={"/"}>
        <StyledSubmitBtn className="submit">Create</StyledSubmitBtn>
      </Link>
      <StyledNew>
        Already have an account?
        <Link to={"/signin"} style={{ textDecorationLine: "#d1d1d1", color: "#764920", marginLeft: "4px" }}>
          Log in Here
        </Link>
      </StyledNew>
    </StyledDiv>
  );
};

export default SignUp;
