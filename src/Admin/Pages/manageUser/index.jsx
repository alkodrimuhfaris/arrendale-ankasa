/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Container, 
         Table,
         Button,
         Col,
         Card, 
         CardBody,
         Form,
         FormGroup,
         Label,
         ButtonGroup,
         InputGroupAddon, 
         Input, 
         InputGroup, 
         Row,
         Modal,
         ModalHeader,
         ModalBody,
         ModalFooter
        } from "reactstrap";

import manageUserAction from '../../Redux/actions/manageUser'

//import style
import "./style/style.css";

import Navbar from "../../Components/NavBar";
import Footer from "../../../User/Components/Footer";

// importing images
import search from "../../Assets/search2.png";
import sort from "../../Assets/sort.svg";
import asc from "../../Assets/asc.png";
import desc from "../../Assets/desc.png";
import prev from "../../Assets/prev.png";
import next from "../../Assets/next.png";

import { Link } from "react-router-dom";

export default function ManageUser(props) {

    let [modalOpen, setModalOpen] = useState(false);
    let [useremail, setEmail] = useState('')
    let [amount, setAmount] = useState(0)

  const tokenAdmin = useSelector(state=>state.auth.tokenAdmin)
  const data = useSelector(state=>state.manageUser)
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(manageUserAction.readUser(tokenAdmin.token))
  },[dispatch, tokenAdmin])

  const deleteHandler = (id) => {
    dispatch(manageUserAction.deleteUser(tokenAdmin.token, id))
  }

  const topUpBalanceHandler = (e) => {
    e.preventDefault()
    let data = {
      nominal: amount,
      email: useremail
    }
    dispatch(manageUserAction.topUpBalance(tokenAdmin.token, data))
    setTimeout(() =>{
      setModalOpen(false)
    }, 690)
  }


  const {dataUser, isDeleted, alertMsg, isError, isSended} = data

  
  useEffect(()=>{
    if (isSended) {
      alert(alertMsg)
    }
  }, [dispatch, isSended, isError])

  useEffect(()=>{
    if (isDeleted && !isError) {
      alert(alertMsg)
      dispatch(manageUserAction.readUser(tokenAdmin.token))
    }
  }, [dispatch, isDeleted, tokenAdmin, isError])

  return (
    <React.Fragment>
        <Navbar />
        <div className="body pb-5">
          <Container>
            <div className="h3 pt-5">Manage user account</div>

            <div>
              <Row className='mb-4 mt-3'>
                <Col lg='4'>
                  <Form onSubmit={1}>
                    <InputGroup>
                      <Input className='input search pl-4' name='search' type='search' onChange={1} placeholder='Search' aria-label='Search' />
                      <InputGroupAddon addonType='prepend'>
                        <Button className='btn-1 btn-search' type='submit' aria-label='search'>
                          <img src={search} alt='...' />
                        </Button>
                      </InputGroupAddon>
                    </InputGroup>
                  </Form>
                </Col>
                <Col lg='2'>
                  <Form onSubmit={2}>
                    <InputGroup>
                      <Input className='input search' type="select" name="sort" onChange={2} aria-label='Sort'>
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
                  <Form onSubmit={3}>
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
                  <Button className='btn-1 px-4 rounded-pill' onClick={()=>{setModalOpen(true)}}>Top up Balance</Button>
                </Col>
              </Row>
            </div>
            <Table className="table-hover">
              <thead className="thead-light">
                <tr>
                  {/* <th>Id</th> */}
                  <th>User name</th>
                  <th>email</th>
                  <th className="d-flex justify-content-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(dataUser) && dataUser.length && dataUser.map((items, index)=>{
                  return (
                    <tr>
                      {/* <th scope="row">1</th> */}
                      <td>{items.username}</td>
                      <td>{items.email}</td>
                      <td className="d-flex justify-content-center">
                        <Button className="btn-detail bg-primary mr-3">detail</Button>
                        <Button onClick={()=>{deleteHandler(items.id)}} className="btn-delete bg-danger">delete</Button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>

            <Row className='align-items-center justify-content-between'>
              {/* <Col lg='2'>
                <span>Total items : </span>
              </Col> */}
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
                      {/* <Button className='asc btn-1 border-0' onClick={()=>this.setState({page: this.state.currentPage-1})} name='page' value='prev' type='submit' addonType="prepend" aria-label='Page'>
                        <img src={prev} alt='...' />
                      </Button>
                    </InputGroupAddon>
                    <Input name='page' value='1' aria-label='Page'/>
                    <InputGroupAddon>
                      <Button className='desc btn-1 border-0' onClick={()=>this.setState({page: this.state.currentPage+1})} name='page' value='next' type='submit' addonType="prepend" aria-label='Page'>
                        <img src={next} alt='...' />
                      </Button> */}
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
        <Modal isOpen={modalOpen} className="modal-dialog modal-lg">
                <ModalHeader style={{borderBottom: 'none'}}>
                </ModalHeader>
                <div className="d-flex align-items-center justify-content-center flex-center">
                    <h4 className="font-weight-bold">Ankasa Payment</h4>
                </div>
                <ModalBody>
                <Form onSubmit={topUpBalanceHandler} className='p-4'>
                <Container>
                  <div className="h3">Add Balance</div>
                  <Card>
                    <CardBody>
                      <div className="font-weight-bold mb-3 mt-3">Email</div>
                      <Form onSubmit={1}>
                        <FormGroup row>
                          <Col>
                            <Input type="email" name="useremail" value={useremail} onChange={(e)=>{setEmail(e.target.value)}} className="border-bottom mb-3" placeholder="Email" required />

                          </Col>
                        </FormGroup>
                        <div className="font-weight-bold mb-4">Amount</div>
                        <FormGroup row>
                          <Label className='mt-2'>$</Label>
                          <Col>
                            <Input type="number" name="amount" value={amount} onChange={(e)=>{setAmount(e.target.value)}} className="border-bottom mb-3" placeholder="amount" required />
                            {/* <Input type="number" value={amount}  name="amount" onChange={(e)=>{setAmount(e.target.value)}}  id="amount" placeholder="000,-" /> */}
                          </Col>
                        </FormGroup>
                      </Form>
                    </CardBody>
                  </Card>
                </Container>
                    
                <div className="btnAddress mr-auto">
                    {/* <Button onClick={} className="d-flex ml-auto btn-light">Close</Button> */}
                    <Button onClick={()=>{setModalOpen(false)}} className="btn-secondary button rounded-pill w-25 btnAddress1 text-light" color={'light'}>
                        Cancel
                    </Button>
                    <Button type='submit' className='button rounded-pill w-25 btnAddress2' style={{backgroundColor: '#DB3022'}}>Add
                    </Button>
                </div>
                </Form>
                </ModalBody>
            </Modal>
        <Footer />
      </React.Fragment>
    );
}