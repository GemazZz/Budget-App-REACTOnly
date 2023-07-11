import { StyledPrintdataDiv, StyledPrintDltBtn, StyledPrintEditBtn, StyledColoredP, StyledDataP } from "./printdataStyle";

const PrintData = () => {
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify([]));
  }
  const data = localStorage.getItem("data");
  const parseData = JSON.parse(data);

  return (
    <>
      {parseData.map((exp) => (
        <StyledPrintdataDiv key={exp.id} value="income">
          <StyledDataP>Created at: {exp.date}</StyledDataP>
          <StyledDataP>Category: {exp.category}</StyledDataP>
          <StyledDataP>Amount: {exp.amount}</StyledDataP>
          <StyledColoredP value={exp.type}>{exp.type}</StyledColoredP>
          <StyledPrintDltBtn>
            <i className="fa-regular fa-circle-xmark fa-lg"></i>
          </StyledPrintDltBtn>
          <StyledPrintEditBtn>
            <i className="fa-regular fa-pen-to-square fa-lg"></i>
          </StyledPrintEditBtn>
        </StyledPrintdataDiv>
      ))}
    </>
  );
};

export default PrintData;
