import styled from "styled-components";
import { Label, Input } from "reactstrap";

export const Card = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 30px;
`;

export const LabelInput = styled(Label)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #9b96ab;
`;

export const InputUser = styled(Input)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  border: none;
  border-bottom: 0.5px solid #9b96ab;
`;

export const LabelCheckBox = styled(Label)`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
`;

export const Heading4 = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-align: right;
  color: #2395ff;
`;

export const Heading6 = styled.h6`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #000000;
`;

export const Span = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #6b6b6b;
`;
