import React from "react";
import styled from "styled-components";

const MainLayer = styled.div`
    background-color:#fff;
    border-radius:1.3rem;
    padding:2rem;
    margin: 0.1rem 0.5rem;
    box-sizing: border-box;
`;
const SearchLayer = styled.div`
    display: flex;
    width:100%;
    flex-direction:cloumn;
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
    margin:1rem 0;
    box-sizing:border-box;
    border-radius:1.3rem 1.3rem 0 0;
    background-color: #F7F8F9;
    justify-content: space-between;
`;
const SearchHeaderTitleLayer = styled.div`
    padding:1.3rem;
    box-sizing:border-box;
`;
const DataHeaderTitle = styled.div`
    font-weight: 400;
`;
function DataList(){
    return(
        <MainLayer>
            <SearchLayer>
                <SearchHeaderTitleLayer><p>구분</p></SearchHeaderTitleLayer>
                <SearchHeaderTitleLayer><select><option value="#">전체</option></select></SearchHeaderTitleLayer>
                <SearchHeaderTitleLayer><p>지점명</p></SearchHeaderTitleLayer>
                <SearchHeaderTitleLayer><input placeholder="지점명 입력"></input></SearchHeaderTitleLayer>
                <SearchHeaderTitleLayer><button>초기화</button></SearchHeaderTitleLayer>
                <SearchHeaderTitleLayer><button>조회</button></SearchHeaderTitleLayer>
            </SearchLayer>
            <CountLayer>
                <p>총 99,99개</p>
            </CountLayer>
            <DataHeaderLayer>
                <DataHeaderTitle>구분</DataHeaderTitle>
                <DataHeaderTitle>지점명</DataHeaderTitle>
                <DataHeaderTitle>등록일</DataHeaderTitle>
                <DataHeaderTitle>위치</DataHeaderTitle>
                <DataHeaderTitle>상세</DataHeaderTitle>
            </DataHeaderLayer>
        </MainLayer>
    )
}
export default DataList;