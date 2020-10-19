import styled from "styled-components";

export const Card = styled.div`
  background: #ffffff;
  border-radius: 15px;
`;

export const TextHeader = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
`;

export const DropdownButton = styled.button`
  
`;

export const DropdownIcon = styled.img`
  box-sizing: border-box;
  border-radius: 1px;
  transform: ${(props) =>
    props.isOpen ? "matrix(0.71, 0.7, -0.71, 0.71, 0, 0)" : ""};
`;

export const DropdownMenu = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const DropdownItem = styled.input``;
