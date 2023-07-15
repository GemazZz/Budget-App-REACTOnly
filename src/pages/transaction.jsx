import {
  StyledDiv,
  StyledCloseBtn,
  StyledTransactionH1,
  StyledRadioInput,
  StyledGreenLabel,
  StyledRedLabel,
  StyledLabel,
  StyledSelect,
  StyledDateLabel,
  StyledSubmitBtn,
  StyledAmountLabel,
  StyledDateInput,
  StyledNumberInput,
} from "../components/styles/transactionStyle";
import { Link } from "react-router-dom";

const Transaction = () => {
  return (
    <StyledDiv>
      <Link to={"/"}>
        <StyledCloseBtn>
          <i className="fa-solid fa-xmark fa-2xl" style={{ color: "#764920" }} />
        </StyledCloseBtn>
      </Link>
      <StyledTransactionH1>New transaction</StyledTransactionH1>
      <div>
        <StyledGreenLabel htmlFor="Income">Income </StyledGreenLabel>
        <input type="radio" value="Income" id="Income" name="source" />

        <StyledRedLabel htmlFor="Expense">Expense </StyledRedLabel>
        <StyledRadioInput type="radio" value="Expense" id="Expense" name="source" />
      </div>
      <div>
        <StyledLabel htmlFor="category">Category: </StyledLabel>
        <StyledSelect id="category">
          <option value="empty" selected disabled>
            Select one
          </option>
        </StyledSelect>
      </div>
      <div>
        <StyledDateLabel htmlFor="date">Select date: </StyledDateLabel>
        <StyledDateInput type="date" id="date" />
      </div>
      <div>
        <StyledAmountLabel htmlFor="amount">Amount: </StyledAmountLabel>
        <StyledNumberInput type="number" id="amount" />
      </div>
      <Link to={"/"}>
        <StyledSubmitBtn className="submit">Submit</StyledSubmitBtn>
      </Link>
    </StyledDiv>
  );
};

export default Transaction;
