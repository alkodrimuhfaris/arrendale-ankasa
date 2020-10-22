import React, { Component } from 'react'
import {
    Container, Card, CardBody,
    Col, Form, FormGroup, Label, Input
} from 'reactstrap'


export default class index extends Component {
    render() {
        return (
            <Container>
                <Card>
                    <CardBody>
                        <div className="h3 mb-4">Add Ticket Detail</div>
                        <Form>
                            <FormGroup row>
                                <Label for="input-id" md={2} sm={3}>Airline id</Label>
                                <Col>
                                    <Input type="number" name="airline_id" id="input-id" placeholder=""></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-code" md={2} sm={3}>flight code</Label>
                                <Col>
                                    <Input type="number" name="flight_code" id="input-code"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-origin" md={2} sm={3}>origin</Label>
                                <Col>
                                    <Input type="number" name="origin" id="input-origin"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-departure" md={2} sm={3}>departure time</Label>
                                <Col>
                                    <Input type="date" name="departure_time" id="input-departure"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-desti" md={2} sm={3}>destination</Label>
                                <Col>
                                    <Input type="number" name="destination" id="input-desti"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-arrived" md={2} sm={3}>arrived time</Label>
                                <Col>
                                    <Input type="date" name="arrived_time" id="input-arrived"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-class" md={2} sm={3}>class name</Label>
                                <Col>
                                    <Input type="select" name="class_name" id="input-class">
                                        <option>Business</option>
                                        <option>Economy</option>
                                        <option>First Class</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-seat" md={2} sm={3}>seat count</Label>
                                <Col>
                                    <Input type="number" name="seat_count" id="input-seat"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-price" md={2} sm={3}>price</Label>
                                <Col>
                                    <Input type="number" name="price" id="input-price"></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={10}></Col>
                                <Col md={2}>
                                    <Input type="submit" value="submit" className="btn btn-primary" />
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        )
    }
}
