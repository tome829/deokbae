import React from "react";

function Nav({selectedTab, setSelectedTab}) {

    const handleTabClick = (tabName) => { //handleTabClick 함수 사용하여, 버튼을 클릭했을 때, 선택된 카테고리 업데이트
        setSelectedTab(tabName);
        //console.log("현재 카테고리 상태 값 : " + tabName);
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