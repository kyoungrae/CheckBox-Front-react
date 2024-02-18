import React from "react";
import styled from "styled-components";
import Data from "./Data";
import {DataListSetter} from "./DataListSetter"

const MainLayer = styled.div`
    background-color:#fff;
    border-radius:1.3rem;
    padding:2rem;
    margin: 0.1rem 0.5rem;
    box-sizing: border-box;
`;
const SearchLayer = styled.div`
    display: flex;
    width:80%;
    align-items:center;
`;
const CountLayer = styled.div`
    display: flex;
    width:100%;
    flex-direction:cloumn;
    padding:1.3rem;
    box-sizing:border-box;
    margin:1rem 0;
`;
const DataHeaderLayer = styled.div`
    display: flex;
    width: 100%;
    padding: 1.3rem;
    margin:1rem 0 0 0;
    box-sizing:border-box;
    border-radius:1.3rem 1.3rem 0 0;
    background-color: #F7F8F9;
    justify-content: space-between;
`;
const SearchHeaderTitleLayer = styled.div`
    padding:0.2rem;
    box-sizing:border-box;
    input , select{
        width:100%;
        height:100%;
        border:1px solid #B3B5B7;
        border-radius:0.4rem;
        padding:10px;
        box-sizing:border-box;
    }
`;
const DataHeaderTitle = styled.div`
    font-weight: 400;
`;
const ButtonStyle = styled.button`
    padding: 10px;
    width:100%;
    box-sizing:border-box;
    border-radius: 12px;
    background:#4F4F4F;
    color:#fff;
    border : none;

`;
const ButtonStyleDark = styled.button`
    padding: 10px;
    width:100%;
    box-sizing:border-box;
    border-radius: 12px;
    background:#242628;
    color:#fff;
    border : none;

`;
const Paging = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
`;
const PaginNumber = styled.div`
    margin-top:10px;
    width:32px;
    height:32px;
    color:#000;
    cursor:pointer;
    border-radius:10px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        color:#fff;
        background:#242628;
    }
`;

function DataList(){
    return(
        <>
            <MainLayer>
                <SearchLayer>
                    <SearchHeaderTitleLayer className="col-percent-10"><p>구분</p></SearchHeaderTitleLayer>
                    <SearchHeaderTitleLayer className="col-percent-20"><select><option value="#">전체</option></select></SearchHeaderTitleLayer>
                    <SearchHeaderTitleLayer className="col-percent-10"><p>지점명</p></SearchHeaderTitleLayer>
                    <SearchHeaderTitleLayer className="col-percent-30"><input placeholder="지점명 입력"></input></SearchHeaderTitleLayer>
                    <SearchHeaderTitleLayer className="col-percent-15"><ButtonStyle>초기화</ButtonStyle></SearchHeaderTitleLayer>
                    <SearchHeaderTitleLayer className="col-percent-15"><ButtonStyleDark>조회</ButtonStyleDark></SearchHeaderTitleLayer>
                </SearchLayer>
                <CountLayer>
                    <p>총 99,99개</p>
                </CountLayer>
                <DataHeaderLayer>
                    <DataHeaderTitle>구분</DataHeaderTitle>
                    <DataHeaderTitle>지점명</DataHeaderTitle>
                    <DataHeaderTitle>등록일</DataHeaderTitle>
                    <DataHeaderTitle>위치</DataHeaderTitle>
                    <DataHeaderTitle></DataHeaderTitle>
                </DataHeaderLayer>
                {DataListSetter.map((v,i) => {
                    return <Data key={i} cont={v}></Data>;
                })}
            </MainLayer>
            <Paging>
                <PaginNumber>1</PaginNumber>
                <PaginNumber>2</PaginNumber>
                <PaginNumber>3</PaginNumber>
                <PaginNumber>4</PaginNumber>
                <PaginNumber>5</PaginNumber>
                <PaginNumber>6</PaginNumber>
                <PaginNumber>7</PaginNumber>
                <PaginNumber>8</PaginNumber>
                <PaginNumber>9</PaginNumber>
                <PaginNumber>10</PaginNumber>
            </Paging>
        </>
    )
}
export default DataList;