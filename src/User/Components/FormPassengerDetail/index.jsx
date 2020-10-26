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
          <InputUser type="select" name="title" onChange={props.change} value={props.title} id="title">
            <option value="Mr.">Mr.</option>
            <option value="Mrs.">Mis.</option>
          </InputUser>
        </FormGroup>
        <FormGroup>
          <LabelInput for="name">Full Name</LabelInput>
          <InputUser type="text" name="name" id="name" placeholder="Enter your Name" onChange={props.change} value={props.name} />
        </FormGroup>
        <FormGroup>
          <LabelInput for="nationality">Nationality</LabelInput>
          <InputUser type="select" name="nationality" onChange={props.change} value={props.nationality} id="nationality" >
            <option value="Indonesia">Indonesia</option>
            <option value="Singapura">Singapura</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Hongkong">Hongkong</option>
            <option value="Jepang">Jepang</option>
          </InputUser>
        </FormGroup>
      </Form>
      
    </Card>
  );
};

export default FormContactPerson;