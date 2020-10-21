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

export const Card = styled.div`
width: 800px;
height: 550px;
padding: 50px;
background: #FFFFFF;
box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
border-radius: 20px;
`;

export const CardBarCode = styled.div`
  position: relative;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  border-left: none;
  border-radius: 7.5px;
  width: 200px;
  height: 350px;
  padding-right: 20px
`;

export const Heading1 = styled.h1`
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
color: #000000;
`;