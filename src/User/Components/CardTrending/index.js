import React, { Component } from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

import './styled/style.css'

import pict3 from "../../Assets/img/destination3.png";
import btn from "../../Assets/img/btnback.png";

export default class index extends Component {
    render() {
        return (
            <div className="d-flex mb-5">
                <Card className="card-tranding shadow p-2 mr-4 mb-5">
                    <CardImg className="img-trending" top width="100%" src={pict3} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="small font-weight-bold">{this.props.city}</CardTitle>
                        <div className="d-flex justify-content-end">
                            <CardSubtitle className="font-weight-bold mr-4">{this.props.country}</CardSubtitle>
                            <Button className="btn-prev d-flex align-items-center justify-content-center ml-4 rounded-circle"><img src={btn} alt="button" /></Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
