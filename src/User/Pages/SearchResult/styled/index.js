import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import {Link} from "react-router-dom";

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

export const BackgroundDetailSearch = styled.div`
  width: 100%;
  height: 176px;
  background: #2395ff;
  border-radius: 0px 0px 30px 30px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const TextHeader1 = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
`;

export const Reset = styled(Link)`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2395FF;
`;

export const TextSecondary = styled.h6`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: #595959;
`;

export const TextHeader4 = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;