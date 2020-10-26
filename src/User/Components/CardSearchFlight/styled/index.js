import styled from "styled-components";
import {Link} from "react-router-dom";
import {Label, Input, Container} from "reactstrap";

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
  display: ${props => props.choiceDisplay ? "none":"block"};
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
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
`;

export const ChoiceButton = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
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


// Choice Origin and Destination

export const CardChoice = styled.div`
  width: 400px;
  background: #ffffff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  position: absolute;
  z-index: 999;
  margin-top: 100px;
  right: 280px;
  ${(props) => (props.choiceDisplay ? "block" : "none")};
`;

export const CardInner = styled.div`
  padding: 16px 16px;
  background-color: #e2e9f4;
  border-radius: 12px;
`;

export const LabelSearch = styled(Label)`
  display: block;
  color: #3c4b66;
  margin-bottom: 12px;
  background: linear-gradient(45deg, rgba(#6b7b8f, 1), #3c4b66);
`;

export const SearchContainer = styled(Container)`
  display: flex;
  align-items: center;
  padding: 0;
`;

export const InputContainer = styled(Container)`

`;

export const IconButton = styled.div`
  min-width: 46px;
  min-height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-right: 12px;
  box-shadow: -2px -2px 6px rgba(#fff, 0.6), 2px 2px 12px #c8d8e7;

`;

export const ListPlace = styled(Container)`
  padding: 0;
  overflow: auto;
  height: 450px;
`;

export const RecentPlace = styled(Container)`
  margin-bottom: 1px solid #dddddd;
`;

export const AllPlace = styled(Container)`
  
`;

export const UnorderList = styled.ul`
  list-style: none;
  padding: 0;
`;
export const List = styled.li`
  padding: 5px 10px;
  background-color: #eeeeee;
  border: 1px solid #dddddd;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
`;

export const ButtonList = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  text-align: left;
`;