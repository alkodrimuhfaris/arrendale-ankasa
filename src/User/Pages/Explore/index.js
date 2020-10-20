import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Card, Row, Col, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap'

//import style
import './style/style.css'

import pict1 from '../../Assets/img/destination1.png'
import pict2 from '../../Assets/img/destination2.png'
import pict3 from '../../Assets/img/destination3.png'
import decor from '../../Assets/img/decoration.png'
import btn from '../../Assets/img/btnback.png'
import flight from '../../Assets/img/flight.png'

export default class Explore extends Component {
    render() {
        return (
            <>
                <Row className="up">
                    <Col sm={6} >
                        <div className="tag-text">Find your <span className="flight">Flight</span></div>
                        <div className="text-secondary">and explore world with us</div>
                    </Col>
                    <Col sm={6} className="d-flex justify-content-end">
                        <img className="image-1" src={pict1} alt="destination 1" />
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} m-5>
                        <img className="image-2" src={pict2} alt="destination 2" />
                    </Col>
                    <Col sm={4} className="align-self-end">
                        <img className="decor-img" src={decor} alt="decoration" />
                    </Col>
                </Row>
                <Container>
                    <div className="text-primary font-weight-bold mt-5">Trending</div>
                    <Row className="mb-3">
                        <Col sm={6} className="font-weight-bold h5">Trending Destination </Col>
                        <Col sm={6} className="text-right">
                            <Link className="text-decoration-none font-weight-bold">view all</Link>
                        </Col>
                    </Row>
                    <div className="d-flex mb-5">
                        <Card className="card-tranding shadow p-2 mr-3">
                            <CardImg className="img-trending" top width="100%" src={pict3} alt="Card image cap" />
                            <CardBody>
                                <CardTitle className="small font-weight-bold">city</CardTitle>
                                <div className="d-flex justify-content-end">
                                    <CardSubtitle className="font-weight-bold mr-5">country</CardSubtitle>
                                    <Button className="btn-prev d-flex align-items-center justify-content-center ml-4 rounded-circle"><img src={btn} alt="button" /></Button>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="tranding-carousel d-flex align-items-end mt-5">
                        <img src={flight} alt="decoration flight" />
                    </div>
                </Container>
            </>
        )
    }
}
