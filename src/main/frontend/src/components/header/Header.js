import React from 'react';
import userImg from '../../img/icon/userImg.png';

export default class Header extends React.Component{
    state = { //로그인 여부를 상태로 관리 //기본값: false
        isLoggedIn: false
    }

    handleLogin = () => {
        //로그인 처리 로직 구현 & 로그인 성공 시 isLoggedIn상태를 true로 업데이트
        this.setState({isLoggedIn: true});
    }
    handleLogout = () => {
        //로그인 처리 로직 구현 & 로그인 성공 시 isLoggedIn상태를 false로 업데이트
        this.setState({isLoggedIn: false});
    }


    render() {
        const {isLoggedIn} = this.state;

        return(
            <div className="header-main" id="header_main">
                <div className="hd_main">
                    <div className="hd_logo">
                        로고
                    </div>
                    <div className="hd_per_page">
                        {isLoggedIn ? (
                            //로그인한 경우
                            <>
                                <img src={userImg} />
                                <div onClick={this.handleLogout}>로그아웃</div>
                            </>
                        ) : (
                            //로그인 하지 않은 경우
                            <div onClick={this.handleLogin}>로그인</div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}