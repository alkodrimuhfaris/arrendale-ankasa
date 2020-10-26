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
  CardTitle,
  CardSubtitle,
  CardText,
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

import historyTransactionAction from "../../Redux/actions/manageTransaction";

//import style
import "./styled/style.css";

export default function HistoryTransaction(props) {
  let history = useHistory();
  let [modalOpen, setModalOpen] = useState(false);
  let [useremail, setEmail] = useState("");
  let [amount, setAmount] = useState(0);
  let [searchname, setSearch] = useState("");
  let [orderBy, setOrderBy] = useState("username");
  let [sortBy, setSortBy] = useState("ASC");

  const token = useSelector(state=>state.auth.token);
  const transactionData = useSelector(state=>state.manageTransaction);
  
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(historyTransactionAction.readTransaction(token));
  },[dispatch, token]);

  const orderByHandler = () => {
    if (orderBy) {
      history.push(`/admin/home?orderBy[${orderBy}]=${sortBy}`);
      dispatch(manageUserAction.readUser(token, [orderBy, sortBy]));
    }
  };
  const deleteHandler = (id) => {
    dispatch(manageUserAction.deleteUser(token, id));
  };

  const {info, isDeleted, alertMsg, isError} = transactionData;
  
  const searchHandler = (e) => {
    e.preventDefault();
    history.push(`/admin/home?search[usename]=${searchname}`);
    dispatch(manageUserAction.readUser(token, [orderBy, sortBy], searchname, ));
  };

  useEffect(()=>{
    if (isDeleted && !isError) {
      // alert(alertMsg);
      dispatch(manageUserAction.readUser(token));
    }
  }, [dispatch, isDeleted, token, isError]);

  return (
    <React.Fragment>
      <Row>
        <Col md={3} lg={3} className="ml-3">
          <Card body inverse style={{ backgroundColor: "#333", borderColor: "#333", height: "170px" }}>
            <CardTitle className="h4">Total Transactions</CardTitle>
            <div style={{borderBottom: "2px solid grey"}} className="mt-2"></div>
            <CardSubtitle className="mt-3 text-center">{info.length}</CardSubtitle>
          </Card>
        </Col>
        <Col md={3} lg={3} className="ml-3">
          <Card body inverse style={{ height: "170px" }} color="primary">
            <CardTitle className="h4">Incomes</CardTitle>
            <div style={{borderBottom: "2px solid white"}} className="mt-2"></div>
            <CardSubtitle className="mt-3 text-center">$ 0</CardSubtitle>
          </Card>
        </Col>
      </Row>
      <div className="body pb-5 mt-4">
        <Container>
          <Table className="table-hover">
            <thead>
              <tr>
                <th style={{fontSize: "15px"}}>No</th>
                <th style={{fontSize: "15px"}}>User id</th>
                <th style={{fontSize: "15px"}}>Passenger name</th>
                <th style={{fontSize: "15px"}}>Booking id</th>
                <th style={{fontSize: "15px"}}>Ticket Code</th>
                <th style={{fontSize: "15px"}}>Date issued</th>
                {/* <th className="d-flex justify-content-center">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {info.length > 0 ? Object.keys(info) && info.length && info.map((items, index)=>{
                return (
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td style={{wordWrap:"break-word", fontSize: "15px"}}>{items.user_id}</td>
                    <td style={{wordWrap:"break-word", fontSize: "15px"}}>{items.passanger_full_name}</td>
                    <td style={{wordWrap:"break-word", fontSize: "15px"}}>{items.booking_id}</td>
                    <td style={{wordWrap:"break-word", fontSize: "15px"}}>{items.ticket_code}</td>
                    <td style={{wordWrap:"break-word", fontSize: "15px"}}>{items.created_at}</td>
                    {/* <td className="d-flex justify-content-center">
                      <Button className="btn-detail bg-primary mr-3">detail</Button>
                      <Button onClick={()=>{deleteHandler(items.id);}} className="btn-delete bg-danger">delete</Button>
                    </td> */}
                  </tr>
                );
              }) : !isError? <h5>Loading...</h5> : <h4 className="mt-4">User not found</h4> }
            </tbody>
          </Table>
        </Container>
      </div>
    </React.Fragment>
  );
}