import React, { useState } from "react";
import {
  Card,
  TextHeader,
  DropdownButton,
  DropdownIcon,
} from "./styled";
import { Container } from "reactstrap";

import upIcon from "../../Assets/up.svg";

const CheckList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Card className="mt-3">
      <Container>
        <TextHeader>{isOpen}</TextHeader>
        <DropdownButton isClick={toggle}>
          <DropdownIcon src={upIcon} isOpen={isOpen} />
        </DropdownButton>
      </Container>
    </Card>
  );
};

export default CheckList;
