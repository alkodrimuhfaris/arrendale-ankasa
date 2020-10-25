/* eslint-disable react/prop-types */
import React from "react";
import { Form, FormGroup, Row, Col, Alert } from "reactstrap";
import { Card, LabelInput, InputUser } from "./styled";

const FormContactPerson = (props) => {
  return (
    <Card>
      <Alert color="success">
        <Row className="align-items-center">
          <Col lg="auto">
            <LabelInput>Passenger : {props.passenger}</LabelInput>
          </Col>
          <Col lg="auto" className="ml-auto custom-control custom-switch">
            <FormGroup check className="custom-control custom-switch">
              <LabelInput className="custom-control-label" for="sameContact">
                Same as contact person{" "}
                <InputUser type="checkbox" className="custom-control-input" id="sameContact" />
              </LabelInput>
            </FormGroup>
          </Col>
        </Row>
      </Alert>
      <Form>
        <FormGroup>
          <LabelInput for="title">Title</LabelInput>
          <InputUser type="select" name="title" id="title">
            <option>Mr.</option>
            <option>Mis.</option>
          </InputUser>
        </FormGroup>
        <FormGroup>
          <LabelInput for="name">Full Name</LabelInput>
          <InputUser type="text" name="name" id="name" placeholder="Enter your Name" value={props.name} />
        </FormGroup>
        <FormGroup>
          <LabelInput for="region">Phone Number</LabelInput>
          <InputUser type="select" name="region" id="region">
            <option>Indonesia</option>
            <option>Singapura</option>
            <option>Malaysia</option>
            <option>Hongkong</option>
            <option>Jeppang</option>
          </InputUser>
        </FormGroup>
      </Form>
      
    </Card>
  );
};

export default FormContactPerson;