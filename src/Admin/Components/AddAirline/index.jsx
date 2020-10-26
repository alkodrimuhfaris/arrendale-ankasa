/* eslint-disable no-empty */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Container, Card, CardBody,
  Col, Form, FormGroup, Label, Input
} from "reactstrap";

import "./styled/style.css";

import http from "../../Helper/http";
import ModalResponse from "../../Components/ModalResponse";
//import action dispatch
import airlineAction from "../../Redux/actions/manageAirline";

const AddFlight = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [modalOpen, setModalOpen] = useState(false);
  const [closeModal] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectPict, setSelectPict] = useState("Choose a Picture");
  const [form, setForm] = useState(new FormData());
  const token = useSelector(state=>state.auth.token);
  const airlineData = useSelector(state=>state.manageAirline);
  const cityData = useSelector(state=>state.manageCity.data);
  const {data} = airlineData;


  // let form = new FormData();
  const uploadFile = (e) => {
    form.append("picture", e.target.files[0]);
    form.append("name", name);
    setSelectPict(e.target.files.length + " image selected");
  };
  const addAirline = async (e) => {
    e.preventDefault();
    try {
      const result = await http(token).post("manage/airlines", form);
      console.log(result);
      if (result.status === 200) {
        setModalOpen(true);
        setMessage(result.data.message);
        setName("");
        setSelectPict("Choose a Picture");
      }
    } catch (err) {
      setModalOpen(true);
      setMessage("Upload picture failed");
    }
  };

  return (
    <>
      <div className="body">
        <Card className="cardFlightS">
          <CardBody className="cardFlight">
            <Label className="h3 mb-4 font-weight-bold">Add Airline</Label>
            <Form onSubmit={addAirline}>
              <FormGroup row>
                <Label for="input-id" md={2} sm={3}>Airline Name</Label>
                <Col>
                  <Input type="text" name="name" onChange={(e)=>{setName(e.target.value);}} aria-label='name' placeholder="Airline Name" required />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="input-origin" md={2} sm={3}>Logo</Label>
                <Col>
                  <Label className="btn btn-outline-secondary rounded-pill">
                    {selectPict}
                    <Input onChange={uploadFile} style={{display: "none"}} type='file' name='picture' accept='.jpg,.jpeg,.png' required />
                  </Label>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={2}></Col>
                <Col md={2}>
                  <Input type="submit" value="Add" className="btn btn-primary" />
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
      <ModalResponse open={modalOpen} close={()=>{setModalOpen(closeModal);}} message={message} />
    </>
  );
};

export default AddFlight;