import React from "react";
import {styled} from 'styled-components';
import { Link } from "react-router-dom";
const DataBodyLayer = styled.div`
    display: flex;
    width: 100%;
    padding: 1.3rem;
    box-sizing:border-box;
    background-color: #fff;
    justify-content: space-between;
`;
const DataBody = styled.div`
    font-weight: 400;

    a{
        color:black !important;
    }
`;
function Data({cont}){
    return(
    <DataBodyLayer>
        <DataBody>{cont.placeType}</DataBody>
        <DataBody>{cont.placeName}</DataBody>
        <DataBody>{cont.registerDate}</DataBody>
        <DataBody>{cont.addrPlace}</DataBody>
        <DataBody><Link to="/DataDetail">{cont.text}</Link></DataBody>
    </DataBodyLayer>
    )
}
export default Data;