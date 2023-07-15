import {
  StyledPrintDataDiv,
  StyledPrintDltBtn,
  StyledPrintEditBtn,
  StyledColoredP,
  StyledDataP,
  StyledContentDiv,
} from "./styles/printdataStyle";
import { useState } from "react";

const PrintData = () => {
  if (!localStorage.getItem("expenses")) {
    localStorage.setItem("expenses", JSON.stringify([]));
  }
  const data = localStorage.getItem("expenses");
  const [parseData, setParseData] = useState(JSON.parse(data));

  const dltExpense = (id) => {
    const updatedData = parseData.filter((exp) => exp.id !== id);
    localStorage.setItem("expenses", JSON.stringify(updatedData));
    setParseData(updatedData);
  };

  return (
    <StyledContentDiv>
      {parseData.map((exp) => (
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
