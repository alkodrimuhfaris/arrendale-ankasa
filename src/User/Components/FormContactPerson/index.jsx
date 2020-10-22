/* eslint-disable react/prop-types */
import React from "react";
import { Form, FormGroup, Col, Row, Alert } from "reactstrap";
import { Card, LabelInput, InputUser } from "./styled";

import dangerIcon from "../../Assets/danger.svg";

const FormContactPerson = (props) => {
  return (
    <Card>
      <Form>
        <FormGroup>
          <LabelInput for="name">Full Name</LabelInput>
          <InputUser type="text" name="name" id="name" placeholder="Enter your Name" value={props.name} />
        </FormGroup>
        <FormGroup>
          <LabelInput for="email">Email</LabelInput>
          <InputUser type="email" name="email" id="email" placeholder="Enter your Email" value={props.email} />
        </FormGroup>
        <FormGroup>
          <LabelInput for="regionPhone">Phone Number</LabelInput>
          <Row>
            <Col lg={2} className="pr-0">
              <InputUser type="select" name="regionPhone" id="regionPhone">
                <option>+ 62</option>
                <option>+ 14</option>
                <option>+ 22</option>
                <option>+ 54</option>
                <option>+ 20</option>
              </InputUser>
            </Col>
            <Col lg={10} className="p-0">
              <InputUser type="number" name="phone" id="phone" placeholder="Enter your Phone" value={props.phone} />
            </Col>
          </Row>
        </FormGroup>
      </Form>
      <Alert color="danger">
        <img src={dangerIcon} alt="" />&nbsp; Make sure the customer data is correct.
      </Alert>
    </Card>
  );
};

export default FormContactPerson;