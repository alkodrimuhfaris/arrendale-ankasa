import React, { Component } from 'react'
import {
    Container, Card, CardBody,
    Col, Form, FormGroup, Label, Input
} from 'reactstrap'

import './styled/style.css'

export default class index extends Component {
    state={
        airline_id:'',
        flight_code:'',
        origin:'',
        departure_time:'',
        destination:'',
        arrived_time:'',
        class_name:'',
        seat_count:'',
        price:''
    }

    handlerChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <Container>
                <Card>
                    <CardBody>
                        <div className="h3 mb-4">{this.props.tittle}</div>
                        <Form>
                            <FormGroup row>
                                <Label for="input-id" md={2} sm={3}>Airline id</Label>
                                <Col>
                                    <Input className="input" type="number" name="airline_id" id="input-id" onChange={this.handlerChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-class" md={2} sm={3}>class name</Label>
                                <Col>
                                    <Input className="input" type="select" name="class_name" id="input-class" onChange={this.handlerChange}>
                                        <option>Business</option>
                                        <option>Economy</option>
                                        <option>First Class</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-origin" md={2} sm={3}>origin</Label>
                                <Col>
                                    <Input className="input" type="number" name="origin" id="input-origin" onChange={this.handlerChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-desti" md={2} sm={3}>destination</Label>
                                <Col>
                                    <Input className="input" type="number" name="destination" id="input-desti" onChange={this.handlerChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-transit" md={2} sm={3}>transit id</Label>
                                <Col>
                                    <Input className="input" type="number" name="transit_id" id="input-transit" onChange={this.handlerChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-departure" md={2} sm={3}>departure time</Label>
                                <Col>
                                    <Input className="input" type="datetime-local" name="departure_time" id="input-departure" onChange={this.handlerChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-arrived" md={2} sm={3}>arrived time</Label>
                                <Col>
                                    <Input className="input" type="datetime-local" name="arrived_time" id="input-arrived" onChange={this.handlerChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-price" md={2} sm={3}>price</Label>
                                <Col>
                                    <Input className="input" type="number" name="price" id="input-price" onChange={this.handlerChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={10}></Col>
                                <Col md={2}>
                                    <Input type="submit" value={this.props.buttonText} className="btn btn-primary" />
                                </Col>
                            </FormGroup>
                        </Form>
                    </CardBody>
                </Card>
            </Container>
        )
    }
}
