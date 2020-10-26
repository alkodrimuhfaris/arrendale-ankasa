/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
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

import manageUserAction from "../../Redux/actions/manageUser";

//import style
import "./styled/style.css";


import ModalResponse from "../../Components/ModalResponse";

// importing images
import search from "../../Assets/search2.png";
import sort from "../../Assets/sort.svg";
import asc from "../../Assets/asc.png";
import desc from "../../Assets/desc.png";
import prev from "../../Assets/prev.png";
import next from "../../Assets/next.png";

import { Link } from "react-router-dom";

export default function ManageUser(props) {
  let history = useHistory();

  const [modalOpen2, setModalOpen2] = useState(false);
  const [closeModal] = useState(false);
  const [message, setMessage] = useState("");

  let [modalOpen, setModalOpen] = useState(false);
  let [useremail, setEmail] = useState("");
  let [amount, setAmount] = useState(0);
  let [searchname, setSearch] = useState("");
  let [orderBy, setOrderBy] = useState("username");
  let [sortBy, setSortBy] = useState("ASC");

  const token = useSelector(state=>state.auth.token);
  const managedata = useSelector(state=>state.manageUser);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(manageUserAction.readUser(token, [orderBy, sortBy]));
    if (sortBy) {
      history.push(`/admin/home?orderBy[${orderBy}]=${sortBy}`);
      dispatch(manageUserAction.readUser(token, [orderBy, sortBy]));
    }
  },[dispatch, token, sortBy]);

  const orderByHandler = () => {
    if (orderBy) {
      history.push(`/admin/home?orderBy[${orderBy}]=${sortBy}`);
      dispatch(manageUserAction.readUser(token, [orderBy, sortBy]));
    }
  };
  const deleteHandler = (id) => {
    dispatch(manageUserAction.deleteUser(token, id));
  };

  const {dataUser, isDeleted, alertMsg, isError, isSended, isLoadingUserManage} = managedata;
  
  const searchHandler = (e) => {
    e.preventDefault();
    history.push(`/admin/home?search[usename]=${searchname}`);
    dispatch(manageUserAction.readUser(token, [orderBy, sortBy], searchname, ));
  };

  const topUpBalanceHandler = (e) => {
    e.preventDefault();
    let data = {
      nominal: amount,
      email: useremail
    };

    dispatch(manageUserAction.topUpBalance(token, data));
  };

  useEffect(()=>{
    if (isDeleted) {
      setModalOpen2(true);
      setMessage(alertMsg);
      dispatch(manageUserAction.readUser(token));
      setTimeout(()=>{
        dispatch(manageUserAction.clearMessage());
      }, 700);
    }
    if (isSended) {
      setModalOpen(false);
      setTimeout(() =>{
        setModalOpen2(true);
        setMessage(alertMsg);
        setAmount(0);
      }, 800);
      dispatch(manageUserAction.clearMessage());
    }
  }, [dispatch, isDeleted, token, isError, isSended, message]);

  return (
    <React.Fragment>
      <div className="body pb-5">
        <Container>
          <div>
            <Row className='mb-4 pt-3'>
              <Col lg={4} md={3}>
                <Form>
                  <InputGroup>
                    <Input className='input search pl-4' name='search' type='search' onChange={(e)=>{setSearch(e.target.value);}} placeholder='Search' value={searchname} aria-label='Search' />
                    <InputGroupAddon addonType='prepend'>
                      <Button className='btn-1 btn-search' type='button' onClick={searchHandler} aria-label='search'>
                        <img src={search} alt='...' />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Form>
              </Col>
              <Col lg={3} md={3}>
                <Form>
                  <InputGroup>
                    <Input className='input search' type="select" name="sort" onChange={(e)=>{setOrderBy(e.target.value);}} aria-label='orderBy'>
                      <option value='username'>Name</option>
                      <option value='email'>Email</option>
                    </Input>
                    <InputGroupAddon addonType='prepend'>
                      <Button className='btn-1 btn-search' onClick={orderByHandler} type='button' aria-label='sort'>
                        <img src={sort} alt='...' />
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Form>
              </Col>
              <Col lg={2} md={3}>
                <Form>
                  <ButtonGroup>
                    <Button className='asc btn-1 border-0' onClick={()=>setSortBy("ASC")}>
                      <img src={asc} alt='...' />
                    </Button>
                    <Button className='desc btn-1 border-0' onClick={()=>setSortBy("DESC")}>
                      <img src={desc} alt='...' />
                    </Button>
                  </ButtonGroup>
                </Form>
              </Col>
              <Col lg={3} md={3} xs={3} className='text-right'>
                <Button className='btn-1 px-4 rounded-pill' onClick={()=>{setModalOpen(true);}}>Top up Balance</Button>
              </Col>
            </Row>
          </div>
          <Table hover responsive>
            <thead className="thead-light">
              <tr>
                <th>No</th>
                <th>User name</th>
                <th>email</th>
                <th className="d-flex justify-content-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {dataUser.length > 0 ? Object.keys(dataUser) && dataUser.length && dataUser.map((items, index)=>{
                return (
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{items.username}</td>
                    <td>{items.email}</td>
                    <td className="d-flex justify-content-center">
                      {/* <Button className="btn-detail bg-primary mr-3">detail</Button> */}
                      <Button onClick={()=>{deleteHandler(items.id);}} className="btn-delete bg-danger">delete</Button>
                    </td>
                  </tr>
                );
              }) : isLoadingUserManage && !isError? <h5>Loading...</h5> : <h4 className="mt-4">User not found</h4> }
            </tbody>
          </Table>
        </Container>
      </div>
      <Modal isOpen={modalOpen} className="modal-dialog modal-lg">
        <ModalHeader style={{borderBottom: "none"}}>
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
                        <Input type="select" name="useremail" onChange={(e)=>{setEmail(e.target.value);}} aria-label='email'>
                          <option value='email'></option>);
                          {Object.keys(dataUser) && dataUser.length && dataUser.map((items, index)=>{
                            return (
                              <>
                                <option>{items.email}</option>);
                              </>
                            );})}
                        </Input>
                      </Col>
                    </FormGroup>
                    <div className="font-weight-bold mb-4">Amount</div>
                    <FormGroup row>
                      <Label className='mt-2'>$</Label>
                      <Col>
                        <Input type="number" name="amount" value={amount} onChange={(e)=>{setAmount(e.target.value);}} className="border-bottom mb-3" placeholder="amount" required />
                      </Col>
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
            </Container>
            <div className="btnAddress mr-auto">
              <Button onClick={()=>{setModalOpen(false);}} className="btn-secondary button rounded-pill w-25 btnAddress1" color={"light"}>
                  Cancel
              </Button>
              <Button type='submit' className='button rounded-pill w-25 btnAddress2' style={{backgroundColor: "#DB3022"}}>Add
              </Button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
      <>
        <ModalResponse open={modalOpen2} close={()=>{setModalOpen2(false);}} message={message} />
      </>
    </React.Fragment>
  );
}