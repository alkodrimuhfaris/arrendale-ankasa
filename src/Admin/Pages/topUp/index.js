import React, { Component } from "react";
import {
  Container, Card, CardBody,
  Col, Form, FormGroup, Label, Input } from "reactstrap";

//import style
import "./style/style.css";

//import component
import Navbar from "../../../User/Components/NavBar";
import Footer from "../../../User/Components/Footer";

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="body pt-5 pb-5">
          <Container>
            <div className="h3">Add Funds to the Account</div>
            <Card>
              <CardBody>
                <div className="font-weight-bold mb-3 mt-3">who will top up ??</div>
                <Form onSubmit={this.handlerSubmit}>
                  <FormGroup row>
                    <Label for="input-email" md={2} sm={3}>email</Label>
                    <Col>
                      <Input type="email" name="email" id="input-email" placeholder="example@mail.com"></Input>
                    </Col>
                  </FormGroup>
                  <div className="font-weight-bold mb-4">how much will be added?</div>
                  <FormGroup row>
                    <Label for="input-amount" md={2} sm={3}>amount</Label>
                    <Col>
                      <Input type="number" name="amount" id="input-amount" placeholder="000,-"></Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={10}></Col>
                    <Col md={2}>
                      <Input type="submit" value="add" className="btn btn-primary" />
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </Container>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
