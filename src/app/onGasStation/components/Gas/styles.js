import styled from "styled-components";

export const GasTitle = styled.div`
  margin: 15px 0;
  font-weight: 700;
  color: ${({ color }) => color};
  text-decoration: ${({ isInStock }) => (!isInStock ? "line-through" : "none")};
`;

export const TotalTTC = styled.span`
  font-size: 19px;
  font-weight: 500;
  margin-top: 10px;
`;

export const Total = styled.span`
  font-size: 12px;
  line-height: 1.5;
`;

export const Tax = styled.span`
  font-size: 12px;
  line-height: 1.5;
  font-weight: 500;
  color: ${({ value }) => (value > 0 ? "#e05d5d" : "green")};
`;

export const Gas = styled.div`
  display: flex;
  flex-direction: column;
  cursor: ${({ isInStock }) => (isInStock ? "pointer" : "no-drop")};
  background-color: #f7f7f7;
  flex: 1;
  align-items: center;
  opacity: ${({ isInStock }) => (!isInStock ? 0.4 : 1)};
  padding: 10px 0;
  background-color: ${({ bgColorSelected, isSelected }) =>
    isSelected ? bgColorSelected : ""};
  :hover {
    background-color: ${({ bgColorSelected, isInStock }) =>
      isInStock && bgColorSelected};
  }
`;
