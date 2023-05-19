import React, { useState, useEffect, useRef } from 'react';
import userImg from '../../img/icon/userImg.png';

function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const toggleDropdown = (event) => {
        event.stopPropagation(); // 이벤트 버블링 방지
        setIsDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {
        const onClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            window.addEventListener('click', onClickOutside);
        }

        return () => {
            window.removeEventListener('click', onClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <div className="header-main" id="header_main">
            <div className="hd_main">
                <div className="hd_logo">로고</div>
                <div className="hd_per_page">
                    {isLoggedIn ? (
                        <div className="dropdown-trigger">
                            <div className="u_name">김효원님</div>
                            <img src={userImg} alt="User" onClick={toggleDropdown} />
                            {isDropdownOpen && (
                                <div className="dropdown" ref={dropdownRef}>
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
                        <div onClick={handleLogin}>로그인</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;