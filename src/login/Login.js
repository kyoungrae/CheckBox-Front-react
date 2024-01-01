import React from "react";
import { Route, Routes } from 'react-router-dom';
import LoginForm from "./LoginForm";
import RegisterMgStore from "../registerMgStore/RegisterMgStore";
import placeMng from "../placeMng/placeStatus"

function Login() {
  return(
    <div>
      <Routes>
        <Route path="/" Component={LoginForm} exact={true} ></Route>
        <Route path="/registerMgStore" Component={RegisterMgStore} exact={true}></Route>
        <Route path="/placeMng" Component={placeMng} exact={true}></Route>
      </Routes>
    </div>
  );
}

export default Login;
