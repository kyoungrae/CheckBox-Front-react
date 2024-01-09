import React from "react";
import {styled} from 'styled-components';
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
`;
function Data({cont}){
    return(
    <DataBodyLayer>
        <DataBody>{cont.placeType}</DataBody>
        <DataBody>{cont.placeName}</DataBody>
        <DataBody>{cont.registerDate}</DataBody>
        <DataBody>{cont.addrPlace}</DataBody>
        <DataBody>{cont.text}</DataBody>
    </DataBodyLayer>
    )
}
export default Data;