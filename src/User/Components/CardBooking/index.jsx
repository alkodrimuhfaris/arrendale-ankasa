import React, { Component } from 'react'
import './styled/style.css'


// import image
import flight from '../../Assets/flight.svg'

export default class CardBooking extends Component {
  render() {
    return (
      <>
        <Card className='my-4'>
          <CardBody className='p-0 d-flex flex-column'>
            <div className='content p-4'>
              <div>Monday, 20 July ‘20 - 12:33</div>
              <div>
                <span>IDN</span><img src={flight} alt='flight' /><span>JPN</span>
              </div>
              <div>Garuda Indonesia, AB-221</div>
            </div>
            <div className='footer p-4'>
              <Row className='d-flex align-items-center'>
                <Col md={2}>
                  <span>Status</span>
                </Col>
                <Col md={3}>
                  <div className='status-waiting text-center py-1 small'>
                    Waiting for payment
                  </div>
                </Col>
                <Col md={7}>

                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </>
    )
  }
}
