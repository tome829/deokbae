import React, {useState} from "react";

function Nav() {
    //기본 selected
    const [selectedTab, setSelectedTab] = useState("d"); //selectedTab이라는 상태값을 사용하여 현재 선택된 카테고리 추적

    const handleTabClick = (tabName) => { //handleTabClick 함수 사용하여, 버튼을 클릭했을 때, 선택된 카테고리 업데이트
        setSelectedTab(tabName);
    };

    return (
        <div className="Nav_bar">
            <button
                className={selectedTab === 'd' ? 'selected' : ''}
                onClick={() => handleTabClick('d')}
            >
                <div>
                    덕배
                </div>
            </button>
            <button
                className={selectedTab === 'c' ? 'selected' : ''}
                onClick={() => handleTabClick('c')}
            >
                <div>
                    춘식
                </div>
            </button>
            <button
                className={selectedTab === 'b' ? 'selected' : ''}
                onClick={() => handleTabClick('b')}
            >
                <div>
                    봉구
                </div>
            </button>
        </div>
    )
}

export default Nav;