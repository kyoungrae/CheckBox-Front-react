import React from "react";
import {Link} from "react-router-dom";
import styled ,{css} from 'styled-components';
import { FaCircleUser } from "react-icons/fa6";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Header({done}){
    const menu = [{"menu":"지점관리"},{"menu":"공지사항"},{"menu":"통계•설정"},{"menu":"관리자"}]
    const storeNm = "crosfit sweatbox";
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
    const MenuItem = styled.div`
                    display:flex;
                    justify-content:flex-start;
                    align-items:center;
                    a{
                        margin:auto 1.5rem;
                        padding:.9rem;
                        box-sizing:border-box;
                    }
                    ${props => props.done && css`
                        color:#000;
                    `}
                `;
    const ClickMenuUl =styled.ul`

                `;
    const ClickMenuLi =styled.li`

                `;
    return(
        <>
            <Navbody>
                 <FlexBar>
                    <div className="logo col-percent-10"/>
                    <MenuItem done={done} className="col-percent-70">
                        {done && <FaCircleUser size={25}/>}
                        <Link to="">{menu[0].menu}</Link>
                        <Link to="">{menu[1].menu}</Link>
                        <Link to="">{menu[2].menu}</Link>
                        <Link to="">{menu[3].menu}</Link>
                    </MenuItem>
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
                    <ClickMenuUl>
                        <ClickMenuLi>예약현황</ClickMenuLi>
                    </ClickMenuUl>
                </FlexBar>
            </Navbody>
        </>
    )
}
export default Header;
