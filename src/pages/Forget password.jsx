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

const ForgetPass = () => {
  return (
    <StyledDiv>
      <Link to={"/"}>
        <StyledCloseBtn>
          <i className="fa-solid fa-xmark fa-2xl" style={{ color: "#764920" }} />
        </StyledCloseBtn>
      </Link>
      <StyledTransactionH1>Password Recovery</StyledTransactionH1>
      <div style={{ position: "relative", left: "14.5px" }}>
        <StyledDateLabel htmlFor="Email">Email: </StyledDateLabel>
        <StyledDateInput type="email" id="Email" />
      </div>
      <div style={{ position: "relative", left: "-5px" }}>
        <StyledAmountLabel htmlFor="amount">New Password: </StyledAmountLabel>
        <StyledNumberInput type="password" id="amount" />
      </div>
      <Link to={"/"}>
        <StyledSubmitBtn className="submit">Update</StyledSubmitBtn>
      </Link>
    </StyledDiv>
  );
};

export default ForgetPass;
