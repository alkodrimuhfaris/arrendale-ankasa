/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import manageUserAction from "../../Redux/actions/manageUser";
import profileAction from "../../Redux/actions/profile";

import { Container, Jumbotron, Media, Row, Col} from "reactstrap";


export default function Profile(props) {
  let history = useHistory();
  let dispatch = useDispatch();

  const adminProfile = useSelector(state=>state.profile);
  const token = useSelector(state=>state.auth.token);
  useEffect(()=>{
    dispatch(profileAction.getProfile(token));
  },[dispatch, token]);

  const {data} = adminProfile;

  const [name, setName] = useState("");
  const [email, setsetEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  useEffect(()=>{
    if (data.length) {
      setName(data[0].username);
      setAvatar(data[0].avatar);
      setsetEmail(data[0].email);
      // console.log(avatar)
    }
  },[data]);

  return (
    <React.Fragment>
      <Container>
        <Jumbotron className="d-flex justify-content-center align-items-center" style={{height: "250px", marginBottom: "80px", backgroundImage: "url(https://images.unsplash.com/photo-1491317002516-6356a658b3e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)", backgroundSize: "cover"}}>
          <div style={{marginTop: "250px", width: "170px", height: "170px", backgroundImage: `url(${process.env.REACT_APP_BACKEND_URL+avatar})`, backgroundSize: "cover", display: "block", backgroundPosition: "center",borderRadius: "100px", BorderRadius: "100px"}}></div>
        </Jumbotron>
        <div className="d-flex justify-content-center">
          <h2 className="ml-2 mt-5">{name}</h2>
        </div>
        <div className="d-flex justify-content-center">
          <h2 className="ml-2 mt-3">{email}</h2>
        </div>
      </Container>      
    </React.Fragment>
  );
}
