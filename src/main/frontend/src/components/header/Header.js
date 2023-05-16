import React from 'react';

export default class Header extends React.Component{
    render() {
        return(
            <div className="header-main" id="header_main">
                <div className="hd_main">
                    <div className="hd_logo">
                        로고
                    </div>
                    <div className="hd_per_page">
                        프로필
                    </div>
                </div>
            </div>
        )
    }
}