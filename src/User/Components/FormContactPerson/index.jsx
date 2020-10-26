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
          <InputUser type="text" name="name" id="name" placeholder="Enter your Name" onChange={props.change} value={props.name} />
        </FormGroup>
        <FormGroup>
          <LabelInput for="email">Email</LabelInput>
          <InputUser type="email" name="email" id="email" placeholder="Enter your Email" onChange={props.change} value={props.email} />
        </FormGroup>
        <FormGroup>
          <LabelInput for="regionPhone">Phone Number</LabelInput>
          <Row>
            <Col lg={2} className="pr-0">
              <InputUser type="select" name="regionPhone" id="regionPhone" onChange={props.change}>
                <option value="+62">+ 62</option>
                <option value="+14">+ 14</option>
                <option value="+22">+ 22</option>
                <option value="+54">+ 54</option>
                <option value="+20">+ 20</option>
              </InputUser>
            </Col>
            <Col lg={10} className="p-0">
              <InputUser type="number" name="phone_number" id="phone" placeholder="Enter your Phone" onChange={props.change} value={props.phone_number} />
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