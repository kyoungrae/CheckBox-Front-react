import React from "react";
import styled  from 'styled-components';
import { FaCircleUser } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import SubMenu from "./SubMenu";
import {MenuItemsSet} from "./MenuItemsSet";
import MenuItems from "./MenuItems";
import "../common/css/top.css";

const Navbody = styled.div`
                with:100%;
                display:flex;
                flex-direction:column;
            `;
const FlexBar = styled.div`
                display:flex;
                background-color:#fff;
                padding:1.3rem;
                box-sizing:border-box;
                box-shadow: 1px 3px 5px rgb(0,0,0,.1);
                border-bottom:1px solid #E3E6E9;
                align-items:center;
            `;
function Header(){
    const storeNm = "crosfit sweatbox";
    return(
        <>
            <Navbody>
                 <FlexBar>
                    <div className="logo col-percent-10"/>
                    <div className="menuItems col-percent-70">
                        {MenuItemsSet.map((menu , index) =>{
                                const depthLevel = 0;
                                return <MenuItems className="col-percent-70" items={menu} key={index} depthLevel={depthLevel}/>
                            })
                        }
                    </div>
                    <div className="col-percent-20 flex-justify-center">
                        <div className="storeInfo">
                            <HiBuildingOffice2/><span>{storeNm}</span><MdOutlineKeyboardArrowRight/>
                        </div>
                        <div>
                            <FaCircleUser size={25}/>
                        </div>
                    </div>
                </FlexBar>
                <FlexBar>
                {MenuItemsSet.map((menu , index) =>{
                                const depthLevel = 1;
                                return <MenuItems className="col-percent-70" items={menu} key={index} depthLevel={depthLevel}/>
                            })
                }
                </FlexBar>
            </Navbody>
        </>
    )
}
export default Header;
