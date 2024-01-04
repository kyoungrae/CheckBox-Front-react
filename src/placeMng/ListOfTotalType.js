import React from "react";
import styled from "styled-components";
const Layer = styled.div`
    background-color:#fff;
    padding: 1.5rem;
    width:25%;
    margin: 1rem 0.5rem;
    border-radius: 1.2rem;
    box-sizing: border-box;
`;
const P = styled.p`
    font-size:2.4rem;
    margin:.4rem 0;
`;
function ListOfTotalType({value}){
    console.log({value});
    return(
        <Layer>
           <p>{value.title}</p>
           <P>{value.count}</P>
        </Layer>   
                
    )
}
export default ListOfTotalType;