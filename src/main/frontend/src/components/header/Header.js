import React, { useState, useEffect, useRef } from 'react';
import userImg from '../../img/icon/userImg.png';
import Modal from "../auth/modal/Modal";

function Header() {
    /* 로그인 여부 판단 */
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleLogin = () => {
        setIsLoggedIn(true);
    };
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    /* 프로필 메뉴 dropdown */
    const dropdownRef = useRef(null);
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


    /* 로그인 모달창으로 띄우기 */
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }



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
                        /*<div onClick={handleLogin}>로그인</div>*/
                        <>
                            <div onClick={openModal}>로그인</div>
                            <Modal open={modalOpen} close={closeModal}></Modal> {/*모달창에서 로그인 성공 시 handleLogin -> true 변환 필요*/}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;