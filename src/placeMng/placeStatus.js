import React from "react";
import {Route , Routes} from "react-router-dom";
import "../common/css/top.css";
import Header from "../headerNavigation/Header";

function placeMng(){
    return(
        <>
        <Header />
        <Routes>
            <Route path=""></Route>
        </Routes>
        </>
    );
}

export default placeMng;