/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import { useBarcode } from "@createnextapp/react-barcode";

const Canvas = styled.img`
  width: 320px;
  height: 100px;
  transform: rotate(270deg);
  background: #ffffff;
  border-radius: 7.5px;
`;

const BarCode = (props) => {
  const { inputRef } = useBarcode({
    value: props.code,
    options: {
      displayValue: true,
      background: "#ffff",
      width: 1,
      fontSize: 10,
    },
  });
  return (
    <div>
      <Canvas ref={inputRef} />
    </div>
  );
};

export default BarCode;
