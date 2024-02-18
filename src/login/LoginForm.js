import React from 'react';
import { Link } from 'react-router-dom';
import '../common/css/login.css'
function LoginForm(){

    return (
        <>
            <form className='loginForm'>
                <div className='loginBody'>
                    <div className='logoBody'>
                        <div className="logo"></div>
                    </div>
                    <div className="login_inputBody">
                        <span>이메일</span>
                        <input className='login_input login_email' name='email' placeholder='이메일 입력' autoComplete='off'></input>
                    </div>
                    <div className="login_inputBody">
                        <span>비밀번호</span>
                        <input className='login_input login_password' name='password' placeholder='비밀번호 입력' autoComplete='off'></input>
                    </div>
                    <div className="login_inputBody">
                        <span>인증번호</span>
                        <div className='login_authBody'>
                            <input className='login_input login_authenticate_number' name='auth_num' placeholder='인증번호 입력' autoComplete='off'></input>
                            <button className='cursor_pointer login_authButton'>발송</button>
                        </div>
                    </div>
                    <div className='login_footer'>
                        <Link to="/PlaceStatus">
                            <button type="button" className='cursor_pointer login_button'>
                                <span>로그인</span>
                            </button>
                        </Link>
                        <div className='cursor_pointer login_findPassword'>
                            <Link to='/'> 
                                <span>비밀번호 찾기</span>
                            </Link>
                        </div>
                        <div className='cursor_pointer login_registerMgStore'>
                            <Link to='/registerMgStore'> 
                                <span>지점 신청하기</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}
export default LoginForm;