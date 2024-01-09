import React from "react";
import "../common/css/top.css";
import styled from 'styled-components';
import {ListOfTotalTypeSetter} from './ListOfTotalTypeSetter';
import ListOfTotalType from "./ListOfTotalType";
import DataList from "../components/DataList";

const BodyLayer = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
`;
const MainLayer = styled.div`
    display:flex;
    width:80%;
    padding:2rem;
    flex-direction:column;
    justify-content:center;
    box-sizing: border-box;

    >p{
        padding:1.6rem;
        font-size:1.4rem;
        box-sizing: border-box;
    }
    // p{
    //     font-weight:bold;
    // }
`;
const ListOfTotalLayear = styled.div`
    display:flex;
    justify-content:space-between;
`;


function PlaceStatus(){
    return(
        <BodyLayer>
            <MainLayer>
                <p>지점현황</p>
                <ListOfTotalLayear>
                        {ListOfTotalTypeSetter.map((v,i) => {
                                return <ListOfTotalType key={i} value={v}></ListOfTotalType>
                            }
                        )}
                </ListOfTotalLayear>
                <DataList ></DataList>    
            </MainLayer>
        </BodyLayer>
    );
}

export default PlaceStatus;