import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.div`
  padding: 28px 0 28px 0;
  background: #ffffff;
  border-radius: 15px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 57px;
`;

export const Airline = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #595959;
`;

export const TextDestination = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 22px;
  color: #000000;
  vertical-align: middle;
`;

export const AirlineIcon = styled.img``;

export const Period = styled.h4`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #595959;
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: #6b6b6b;
  text-align: center;
`;

export const Icon = styled.img``;

export const Price = styled.span`
  display: flex;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #2395ff;
  vertical-align: middle;
`;

export const SelectButton = styled.button`
  width: 150px;
  height: 50px;
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  border: none;
`;

export const TextButton = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const ViewDetails = styled(Link)`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2395ff;
`;
