import React from "react";
import {Link} from "react-router-dom";
import styled  from 'styled-components';
const LinkBody = styled.div`
    margin-right:30px;
`;
function MenuItems({items, depthLevel}){
    const subMenuLength = items.submenu.length;
    return (
        <>
        {depthLevel === 1 && subMenuLength > 0? 
            items.submenu.map((v,i) => (
                <LinkBody key={i}>
                     <Link to={v.path}> {v.title} </Link> 
                </LinkBody>
             ))
            :   <LinkBody>
                    <Link to="#"> {items.title} </Link> 
                </LinkBody>}
        </>
    )
    
}
export default MenuItems;