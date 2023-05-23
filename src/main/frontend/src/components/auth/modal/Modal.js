import React from 'react';
import '../../../css/Main.css';

const Modal = (props) => {
    //열기,닫기,모달 헤더 텍스트를 부모로부터 받아옴
    const {open, close} = props;

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            { open ? (
                <section>
                    <header>
                        로그인 / 회원가입
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>

                    {/*<main>{props.children}</main>*/}
                    <main className="login_pop">
                        <div>아이디 : <input type="text" /></div>
                        <div>비밀번호 : <input type="password" /></div>
                    </main>

                    <footer>
                        <button className="signIn" type="submit">
                            로그인
                        </button>
                        <button className="signUp" onClick={close}>
                            회원가입
                        </button>
                    </footer>
                </section>
            ) :
               null
            }
        </div>
    );
}

export default Modal;