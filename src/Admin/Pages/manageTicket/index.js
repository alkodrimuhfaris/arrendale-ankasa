import React, { Component } from 'react'
import { Container, Table, Button } from 'reactstrap'

//import style
import './style/style.css'

//import component
import Navbar from '../../../User/Components/NavBar'
import Footer from '../../../User/Components/Footer'

export default class index extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="body pb-5">
                    <Container>
                        <div className="h3 pt-5">Ticketing List</div>
                        <Table className="table-hover">
                            <thead className="thead-light">
                                <tr>
                                    <th>No</th>
                                    <th>Maskapai</th>
                                    <th>email</th>
                                    <th className="d-flex justify-content-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Garuda Airline</td>
                                    <td>amam@gmail.com</td>
                                    <td className="d-flex justify-content-center">
                                        <Button className="btn-detail bg-primary mr-3">detail</Button>
                                        <Button className="btn-delete bg-danger">delete</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Adam air</td>
                                    <td>abdulQadir@gmail.com</td>
                                    <td className="d-flex justify-content-center">
                                        <Button className="btn-detail bg-primary mr-3">detail</Button>
                                        <Button className="btn-delete bg-danger">delete</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>sukhoi</td>
                                    <td>mamatalkatiri@mail.com</td>
                                    <td className="d-flex justify-content-center">
                                        <Button className="btn-detail bg-primary mr-3">detail</Button>
                                        <Button className="btn-delete bg-danger">delete</Button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>traveloka</td>
                                    <td>samueletoo@gmail.com</td>
                                    <td className="d-flex justify-content-center">
                                        <Button className="btn-detail bg-primary mr-3">detail</Button>
                                        <Button className="btn-delete bg-danger">delete</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Container>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
