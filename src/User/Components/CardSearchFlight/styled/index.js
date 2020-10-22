import styled from "styled-components";
import {Link} from "react-router-dom";
import {Label, Input} from "reactstrap";

export const Card = styled.div`
  width: 400px;
  background: #ffffff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  position: absolute;
  z-index: 999;
  margin-top: 100px;
  right: 280px;
  padding: 25px;
`;

export const SubCard = styled.div`
  background: #ffffff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
`;

export const TextBlack = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #000000;
`;

export const LinkRecently = styled(Link)`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: right;
  color: #2395ff;
`;

export const Heading6 = styled.h6`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;

  color: #979797;
`;

export const Heading4 = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
`;

export const SwitchButton = styled.button`

`;

export const GrupButton = styled.button`
  height: 44px;
  background: ${(props) => (props.isOpen ? "#2395ff" : "#F0F0F0")};
  border-radius: 6px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => (props.isOpen ? "#ffffff" : "##595959")};
`;

export const LabelInput = styled(Label)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #6b6b6b;
`;

export const InputUser = styled(Input)`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 6px;
`;

export const SearchButton = styled.button`
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  height: 57px;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`;