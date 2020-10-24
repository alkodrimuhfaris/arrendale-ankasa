import React, { Component } from 'react'
import {
    Container, Card, CardBody,
    Col, Form, FormGroup, Label, Input
} from 'reactstrap'
import { connect } from 'react-redux';

import './styled/style.css'

//import action dispatch
import flightAction from '../../Redux/actions/addFlight'

class index extends Component {
    state = {
        airline_id: '',
        origin: '',
        destination: '',
        transit_id:'',
        departure_date:'',
        departure_time: '',
        arrived_date:'',
        arrived_time: '',
        class_id: ''
    }

    addFlight = (e) => {
        e.preventDefault()
        const {
            airline_id,
            class_id,
            origin,
            destination,
            transit_id,
            departure_date,
            departure_time,
            arrived_date,
            arrived_time
        } = this.state

        const data = {
            airline_id,
            class_id,
            origin,
            destination,
            transit_id,
            departure_date,
            departure_time,
            arrived_date,
            arrived_time
        }
        this.props.addingData(data)
    }

    handlerChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidUpdate() {
        if (this.props.addTheFlight.isAdd) {
            this.props.history.push('/manage/flight')
        }
    }

    render() {
        return (
            <Container>
                <Card>
                    <CardBody>
                        <div className="h3 mb-4">{this.props.tittle}</div>
                        <Form onSubmit={this.addFlight}>
                            <FormGroup row>
                                <Label for="input-id" md={2} sm={3}>Airline id</Label>
                                <Col>
                                    <Input className="input" type="number" name="airline_id" id="input-id" onChange={this.handlerChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-class" md={2} sm={3}>class name</Label>
                                <Col>
                                    <Input className="input" type="number" name="class_id" id="input-class" onChange={this.handlerChange}></Input>
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
                                <Label for="input-depart-date" md={2} sm={3}>departure date</Label>
                                <Col>
                                    <Input className="input" type="date" name="departure_date" id="input-depart-date" onChange={this.handlerChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-depart-time" md={2} sm={3}>departure time</Label>
                                <Col>
                                    <Input className="input" type="time" name="departure_time" id="input-depart-time" onChange={this.handlerChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-arrived-date" md={2} sm={3}>arrived date</Label>
                                <Col>
                                    <Input className="input" type="date" name="arrived_date" id="input-arrived-date" onChange={this.handlerChange}></Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label for="input-arrived" md={2} sm={3}>arrived time</Label>
                                <Col>
                                    <Input className="input" type="time" name="arrived_time" id="input-arrived" onChange={this.handlerChange}></Input>
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

const mapStateToProps = state => ({
    addTheFlight: state.addFlight
})
const mapDispatchToProps = {
    addingData: flightAction.addData
}


export default connect(mapStateToProps, mapDispatchToProps)(index);