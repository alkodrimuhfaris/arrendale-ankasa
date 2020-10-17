import React, { Component } from 'react'
import { Container, Card } from 'reactstrap'
import { Link } from 'react-router-dom'

import pict1 from '../Assets/img/destination1.png'
import pict2 from '../Assets/img/destination2.png'
import decor from '../Assets/img/decoration.png'

export default class Explore extends Component {
    render() {
        return (
            <>
                <Container>
                    <h1>Find your flight</h1>
                </Container>
                <div class="d-flex justify-content-end">
                    <img src={pict1} />
                </div>
                <div>
                    <img src={pict2} />
                    <div class="d-flex justify-content-end">
                        <img src={decor} />
                    </div>
                </div>
                <div className="tranding">
                    <Container>
                        <span className="text-primary">Trending</span>
                        <div className="h5 font-weight-bold">
                            Trending Destinations
                                <div class="d-flex justify-content-end">
                                <Link to='/find'>View all</Link>
                            </div>
                        </div>
                        <Card>vieew</Card>
                        <Card>vieew</Card>
                    </Container>
                </div>
                <Container>
                    <div className="top-destination">

                    </div>
                </Container>
            </>
        )
    }
}
