/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import authAction from "./Redux/actions/auth";


// import component
import PrivateRoute from "./Components/PrivateRoute";

// import pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";



export default function App() {
  const dispatch = useDispatch();
  const credentials = useSelector(state=>state.auth);
  const {isErrorAdmin} = credentials;
  useEffect(()=>{
    if(localStorage.getItem("token")){
      dispatch(authAction.setTokenAdmin(localStorage.getItem("token")));
    }
    // if (isErrorAdmin) {
    //   dispatch(authAction.logoutAdmin());
    // }
  }, [dispatch, isErrorAdmin]);
  return (
    <>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/admin/home">
            <Home />
          </PrivateRoute>
          <Route path="/admin/login" render={(props)=><Login {...props} />} exact/>
          <Route path="/admin/forgot" render={(props)=><ForgotPassword {...props} />} exact/>
        </Switch>
      </BrowserRouter>
    </>
  );
}