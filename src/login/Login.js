import React from "react";
import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import LoginForm from "./LoginForm";
import RegisterMgStore from "../registerMgStore/RegisterMgStore";
import PlaceStatus from "../placeMng/PlaceStatus";
import DataDetail from "../components/DataDetail";
import Header from "../headerNavigation/Header";
function Login() {
  const location = useLocation();
  // 로그인 페이지인 경우에만 헤더를 제외하고 렌더링
  if (location.pathname === '/') {
    return (
      <>
          <Routes>
            <Route path="/" Component={LoginForm} exact={true}></Route>
            <Route path="/registerMgStore/*" Component={RegisterMgStore} exact={true}></Route>
            <Route path="/PlaceStatus/*" Component={PlaceStatus} exact={true}></Route>
          </Routes>
      </>
    );
  }
  // 로그인 페이지가 아닌 경우에는 헤더와 라우트 모두 렌더링
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" Component={LoginForm} exact={true} ></Route>
          <Route path="/registerMgStore/*" Component={RegisterMgStore} exact={true}></Route>
          <Route path="/PlaceStatus/*" Component={PlaceStatus} exact={true}></Route>
          <Route path="/DataDetail/*" Component={DataDetail} exact={true}></Route>
        </Routes>
    </>
  );
}

export default Login;
