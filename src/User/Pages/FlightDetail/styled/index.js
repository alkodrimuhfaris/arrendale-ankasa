/* eslint-disable no-undef */
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0px;
      padding: 0px;
      box-sizing: border-box;
  }
  body {
    background: #F5F6FA;
  }
`;

export const FlightBackground = styled.div`
  width: 100%;
  height: 176px;
  background: #2395ff;
  border-radius: 0px 0px 30px 30px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Heading1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: ${(props) => props.inputColor};
`;

export const Heading4 = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #ffffff;
`;

export const PaymentButton = styled.button`
width: 319px;
height: 57px;
background: #2395FF;
box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
border-radius: 10px;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 27px;
color: #FFFFFF;
`;