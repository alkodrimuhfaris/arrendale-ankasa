/* eslint-disable react/prop-types */
import React from "react";
import { FormGroup, Container, Col, Row } from "reactstrap";
import { Card, LabelCheckBox, Heading4, Heading6, InputUser, Span } from "./styled";

const FormInsurance = (props) => {
  return (
    <Card>
      <Container className="pb-4 border-bottom">
        <Row>
          <Col>
            <FormGroup check>
              <LabelCheckBox check>
                <InputUser type="checkbox" name="insurance" value={props.insurance} onChange={props.change}  /> Travel Insurance
              </LabelCheckBox>
            </FormGroup>
          </Col>
          <Col>
            <Heading4>
              $ 2,00 <Span>/pax</Span>
            </Heading4>
          </Col>
        </Row>
      </Container>
      <Container className="mt-4">
        <Heading6>Get travel compensation up to $ 10.000,00</Heading6>
      </Container>
    </Card>
  );
};

export default FormInsurance;
