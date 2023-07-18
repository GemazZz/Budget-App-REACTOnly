import { useState } from "react";
import {
  StyledPrintDataDiv,
  StyledPrintDltBtn,
  StyledPrintEditBtn,
  StyledColoredP,
  StyledDataP,
  StyledContentDiv,
  StyledCommandDiv,
} from "./styles/printdataStyle";

const PrintData = () => {
  if (!localStorage.getItem("expenses")) {
    localStorage.setItem("expenses", JSON.stringify([]));
  }
  const currentUserId = JSON.parse(localStorage.getItem("id"));
  console.log(currentUserId);

  const data = localStorage.getItem("expenses");
  const [parseData, setParseData] = useState(JSON.parse(data));

  const printParseDate = parseData.filter((user) => user.userId === currentUserId);
  const dltExpense = (id) => {
    const updatedData = parseData.filter((exp) => exp.id !== id);
    localStorage.setItem("expenses", JSON.stringify(updatedData));
    setParseData(updatedData);
  };
  console.log(printParseDate);

  return (
    <StyledContentDiv>
      {!currentUserId && <StyledCommandDiv>Log in to add items</StyledCommandDiv>}
      {currentUserId && printParseDate.length === 0 && <StyledCommandDiv>No previous transactions</StyledCommandDiv>}
      {printParseDate.map((exp) => (
        <StyledPrintDataDiv key={exp.id} value={exp.type}>
          <StyledDataP>Created at: {exp.date}</StyledDataP>
          <StyledDataP>Category: {exp.category}</StyledDataP>
          <StyledDataP>Amount: {exp.amount}</StyledDataP>
          <StyledColoredP value={exp.type}>{exp.type}</StyledColoredP>
          <StyledPrintDltBtn onClick={() => dltExpense(exp.id)}>
            <i className="fa-regular fa-circle-xmark fa-lg" />
          </StyledPrintDltBtn>
          <StyledPrintEditBtn>
            <i className="fa-regular fa-pen-to-square fa-lg" />
          </StyledPrintEditBtn>
        </StyledPrintDataDiv>
      ))}
    </StyledContentDiv>
  );
};

export default PrintData;
