import React, { Component } from "react";
import { Container, Table, Button, Col, Form, ButtonGroup, InputGroupAddon, Input, InputGroup, Row } from "reactstrap";

//import style
import "./style/style.css";

//import component
import Navbar from "../../Components/NavBar";
import Footer from "../../../User/Components/Footer";

// importing images
import search from "../../Assets/search2.png";
import sort from "../../Assets/sort.svg";
import asc from "../../Assets/asc.png";
import desc from "../../Assets/desc.png";
import prev from "../../Assets/prev.png";
import next from "../../Assets/next.png";

export default class index extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="body pb-5">
          <Container>
            <div className="h3 pt-5">Manage user account</div>

            <div>
              <Row className='mb-4 mt-3'>
                <Col lg='4'>
                  <Form onSubmit={this.searchData}>
                    <InputGroup>
                      <Input className='input search pl-4' name='search' type='search' onChange={this.changeInput} placeholder='Search' aria-label='Search' />
                      <InputGroupAddon addonType='prepend'>
                        <Button className='btn-1 btn-search' type='submit' aria-label='search'>
                          <img src={search} alt='...' />
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Form>
                </Col>
                <Col lg='2'>
                  <Form onSubmit={this.searchData}>
                    <InputGroup>
                      <Input className='input search' type="select" name="sort" onChange={this.changeInput} aria-label='Sort'>
                        <option value='name'>Name</option>
                        <option value='email'>Email</option>
                      </Input>
                      <InputGroupAddon addonType='prepend'>
                        <Button className='btn-1 btn-search' type='submit' aria-label='sort'>
                          <img src={sort} alt='...' />
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Form>
                </Col>
                <Col lg='2'>
                  <Form onSubmit={this.searchData}>
                    <ButtonGroup>
                      <Button className='asc btn-1 border-0' onClick={()=>this.setState({sortBy: "asc"})} name='sortBy' value='asc' type='submit' >
                        <img src={asc} alt='...' />
                      </Button>
                      <Button className='desc btn-1 border-0' onClick={()=>this.setState({sortBy: "desc"})} name='sortBy' value='desc' type='submit' >
                        <img src={desc} alt='...' />
                      </Button>
                    </ButtonGroup>
                  </Form>
                </Col>
                <Col lg='4' className='text-right'>
                  <Button className='btn-1 px-4 rounded-pill' onClick={()=>this.createItem()}>Create Admin</Button>
                </Col>
              </Row>
            </div>
            <Table className="table-hover">
              <thead className="thead-light">
                <tr>
                  <th>No. Id</th>
                  <th>User name</th>
                  <th>email</th>
                  <th className="d-flex justify-content-center">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>amam</td>
                  <td>amam@gmail.com</td>
                  <td className="d-flex justify-content-center">
                    <Button className="btn-detail bg-primary mr-3">detail</Button>
                    <Button className="btn-delete bg-danger">delete</Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>abdul</td>
                  <td>abdulQadir@gmail.com</td>
                  <td className="d-flex justify-content-center">
                    <Button className="btn-detail bg-primary mr-3">detail</Button>
                    <Button className="btn-delete bg-danger">delete</Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>mamat</td>
                  <td>mamatalkatiri@mail.com</td>
                  <td className="d-flex justify-content-center">
                    <Button className="btn-detail bg-primary mr-3">detail</Button>
                    <Button className="btn-delete bg-danger">delete</Button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>samuel</td>
                  <td>samueletoo@gmail.com</td>
                  <td className="d-flex justify-content-center">
                    <Button className="btn-detail bg-primary mr-3">detail</Button>
                    <Button className="btn-delete bg-danger">delete</Button>
                  </td>
                </tr>
              </tbody>
            </Table>

            <Row className='align-items-center justify-content-between'>
              <Col lg='2'>
                <span>Total items : </span>
              </Col>
              <Col lg='2'>
                <Form>
                  <InputGroup>
                    <InputGroupAddon>
                      {/* {this.state.currentPage > 1 ? 
                        <Button className='asc btn-1 border-0' onClick={()=>this.setState({page: this.state.currentPage-1})} name='page' value='prev' type='submit' addonType="prepend" aria-label='Page'>
                          <img src={prev} alt='...' />
                        </Button> :
                        <Button disabled className='asc btn-1 border-0' name='page' value='prev' type='submit' addonType="prepend" aria-label='Page'>
                          <img src={prev} alt='...' />
                        </Button>
                      } */} 
                      <Button className='asc btn-1 border-0' onClick={()=>this.setState({page: this.state.currentPage-1})} name='page' value='prev' type='submit' addonType="prepend" aria-label='Page'>
                        <img src={prev} alt='...' />
                      </Button>
                    </InputGroupAddon>
                    <Input name='page' value='1' aria-label='Page'/>
                    <InputGroupAddon>
                      <Button className='desc btn-1 border-0' onClick={()=>this.setState({page: this.state.currentPage+1})} name='page' value='next' type='submit' addonType="prepend" aria-label='Page'>
                        <img src={next} alt='...' />
                      </Button>
                      {/* {this.state.currentPage < this.state.pages ? 
                      <Button className='desc btn-1 border-0' onClick={()=>this.setState({page: this.state.currentPage+1})} name='page' value='next' type='submit' addonType="prepend" aria-label='Page'>
                        <img src={next} alt='...' />
                      </Button> :
                      <Button disabled className='desc btn-1 border-0' name='page' value='next' type='submit' addonType="prepend" aria-label='Page'>
                        <img src={next} alt='...' />
                      </Button>
                    } */}
                    </InputGroupAddon>
                  </InputGroup>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
