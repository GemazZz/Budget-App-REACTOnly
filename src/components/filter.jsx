import {
  StyledLabel,
  StyledFilterDiv,
  StyledInput,
  StyledSelect,
  StyledRadioInput,
  StyledFilterBtn,
  StyledInputNumber,
  StyledGreenLabel,
  StyledRedLabel,
} from "./filterStyle";

const Filter = () => {
  return (
    <StyledFilterDiv>
      <StyledLabel htmlFor="data">Created at:</StyledLabel>
      <StyledInput type="date" id="date" />

      <StyledLabel htmlFor="type">Type: </StyledLabel>
      <div id="type">
        <StyledGreenLabel htmlFor="Income">Income </StyledGreenLabel>
        <StyledRadioInput type="radio" value="income" id="Income" name="source" />

        <StyledRedLabel htmlFor="Expence">Expence </StyledRedLabel>
        <StyledRadioInput type="radio" value="expence" id="Expence" name="source" />
      </div>
      <StyledLabel htmlFor="category">Category: </StyledLabel>
      <StyledSelect id="category">
        <option value="empty" defaultValue={"empty"} disabled>
          Select one
        </option>
      </StyledSelect>

      <StyledLabel htmlFor="min">Min: </StyledLabel>
      <StyledInputNumber type="number" id="min" />

      <StyledLabel htmlFor="max">Max: </StyledLabel>
      <StyledInputNumber type="number" id="max" />

      <StyledFilterBtn>Filter</StyledFilterBtn>
    </StyledFilterDiv>
  );
};

export default Filter;
