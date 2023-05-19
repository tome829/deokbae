import React, { useState } from 'react';
import userImg from '../../img/icon/userImg.png';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogin = () => {
        // 로그인 처리 로직 구현 & 로그인 성공 시 isLoggedIn 상태를 true로 업데이트
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // 로그아웃 처리 로직 구현 & 로그아웃 성공 시 isLoggedIn 상태를 false로 업데이트
        setIsLoggedIn(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="header-main" id="header_main">
            <div className="hd_main">
                <div className="hd_logo">로고</div>
                <div className="hd_per_page">
                    {isLoggedIn ? (
                        // 로그인한 경우
                        <div onClick={toggleDropdown} className="dropdown-trigger">
                            <img src={userImg} alt="User" />
                            {isDropdownOpen && (
                                <div className="dropdown">
                                    <ul className="dropdown-list">
                                        <li className="dropdown-item">설정</li>
                                        <li className="dropdown-item" onClick={handleLogout}>
                                            로그아웃
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    ) : (
                        // 로그인 하지 않은 경우
                        <div onClick={handleLogin}>로그인</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;