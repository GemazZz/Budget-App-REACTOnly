import { useState } from "react";
import {
  StyledPrintDataDiv,
  StyledPrintDltBtn,
  StyledPrintEditBtn,
  StyledColoredP,
  StyledDataP,
  StyledContentDiv,
  StyledCommandDiv,
} from "../styles/printDataStyle";

const PrintData = (props) => {
  const currentUserId = JSON.parse(localStorage.getItem("id"));
  const printParseData = props.currentExpenses;

  return (
    <StyledContentDiv>
      {!currentUserId && <StyledCommandDiv>Log in to add items</StyledCommandDiv>}
      {currentUserId && printParseData.length === 0 && <StyledCommandDiv>No previous transactions</StyledCommandDiv>}
      {printParseData.map((exp) => (
        <StyledPrintDataDiv key={exp.id} value={exp.type}>
          <StyledDataP>Created at: {exp.date}</StyledDataP>
          <StyledDataP>Category: {exp.category}</StyledDataP>
          <StyledDataP>Amount: {exp.amount}</StyledDataP>
          <StyledColoredP value={exp.type}>{exp.type}</StyledColoredP>
          <StyledPrintDltBtn onClick={() => props.dltExpense(exp.id)}>
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
