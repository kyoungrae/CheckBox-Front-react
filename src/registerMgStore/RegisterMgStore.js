import React from "react";
import '../common/css/regMgSt.css';
function RegisterMgStore(){
    const sortation = "구분";
    const storeNm = "지점명";
    const storeAddr = "지점위치";
    const storeUserNum = "지점 회원수";
    const dateOfEstablishment = "지점 설립일";
    const nameOfrepresentative = "대표자명";
    const phoneNum = "대표자 휴대폰번호";
    const email = "이메일";
    const password = "비밀번호";
    const nickName = "닉네임";

    return (
        <>
            <div class="regMgSt_Body">
                <nav className="regMgSt_nav">
                    <span>지점신청하기</span>
                </nav>
                <article className="regMgSt_content_Body">
                    <div className="regMgSt_content_Body_box">
                        <div className="regMgSt_content">
                            <div className="regMgSt_content_title">
                                <span>{sortation}</span>
                            </div>
                            <div className="regMgSt_content_value_box">
                                <select className="regMgSt_content_value">
                                    <option>선택</option>
                                    <option value="crossfit">크로스핏</option>
                                    <option value="pilates">필라테스</option>
                                </select>
                            </div>
                        </div>
                        <div className="regMgSt_content">
                            <div className="regMgSt_content_title">
                                <span>{storeNm}</span>
                            </div>
                            <div className="regMgSt_content_value_box">
                                <input className="regMgSt_content_value" placeholder={storeNm}/>
                            </div>
                        </div>
                        <div className="regMgSt_content">
                            <div className="regMgSt_content_title">
                                <span>{storeAddr}</span>
                            </div>
                            <div className="regMgSt_content_value_box">
                                <div className="regMgSt_content_valueInButton">
                                    <input className="col-percent-60 regMgSt_content_value" placeholder={storeAddr}/>
                                    <button className="col-percent-40 btn regMgSt_search_addr"><span>주소검색</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="regMgSt_content">
                            <div className="regMgSt_content_title">
                                <span>{storeUserNum}</span>
                            </div>
                            <div className="regMgSt_content_value_box">
                                <input className="regMgSt_content_value" placeholder={storeUserNum}/>
                            </div>
                        </div>
                        <div className="regMgSt_content">
                            <div className="regMgSt_content_title">
                                <span>{dateOfEstablishment}</span>
                            </div>
                            <div className="regMgSt_content_value_box">
                                <input type="date" className="regMgSt_content_value" placeholder={dateOfEstablishment}/>
                            </div>
                        </div>
                    </div>
                    <div className="crossLine"></div>
                    <div className="regMgSt_content_Body_box">
                        <div className="regMgSt_content">
                            <div className="regMgSt_content_title">
                                <span>{nameOfrepresentative}</span>
                            </div>
                            <div className="regMgSt_content_value_box">
                                <input className="regMgSt_content_value" placeholder={nameOfrepresentative}/>
                            </div>
                        </div>
                        <div className="regMgSt_content">
                            <div className="regMgSt_content_title">
                                <span>{phoneNum}</span>
                            </div>
                            <div className="regMgSt_content_value_box">
                                <input className="regMgSt_content_value" placeholder={phoneNum}/>
                            </div>
                        </div>
                        <div className="regMgSt_content">
                            <div className="regMgSt_content_title">
                                <span>{email}</span>
                            </div>
                            <div className="regMgSt_content_value_box">
                                <input className="regMgSt_content_value" placeholder={email}/>
                            </div>
                        </div>
                        <div className="regMgSt_content">
                            <div className="regMgSt_content_title">
                                <span>{password}</span>
                            </div>
                            <div className="regMgSt_content_value_box">
                                <input className="regMgSt_content_value" placeholder={password}/>
                            </div>
                        </div>
                        <div className="regMgSt_content">
                            <div className="regMgSt_content_title">
                                <span>{nickName}</span>
                            </div>
                            <div className="regMgSt_content_value_box">
                                <input className="regMgSt_content_value" placeholder={nickName}/>
                            </div>
                        </div>
                    </div>
                    <footer className="regMgtSt_footer">
                        <div>
                            <button className="btn">닫기</button>
                            <button className="btn">신청</button>
                        </div>
                    </footer>
                </article>
            </div>
        </>
    )
}

export default RegisterMgStore;