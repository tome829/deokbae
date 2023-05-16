import React from "react";
import Slider from "react-slick";
import Styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Chunsik1 from "./../../img/chunsik1.jpg"
import Chunsik2 from "./../../img/chunsik2.jpg"
import deokbae1 from "./../../img/deokbae1.jpg"
import deokbae2 from "./../../img/deokbae2.jpg"
import deokbae3 from "./../../img/deokbae3.jpg"
import {ReactComponent as NextBtn} from "../../img/icon/chevron-right(white).svg";
import {ReactComponent as PrevBtn} from "../../img/icon/chevron-left(white).svg";

/*const images=[
    'chunsik1.jpg',
    'chunsik2.jpg',
    'deokbae1.jpg',
    'deokbae2.jpg',
    'deokbae3.jpg'
]*/
const images1=[
    Chunsik1,
    Chunsik2,
    deokbae1,
    deokbae2,
    deokbae3
]

function Banner() {
    const settings={
        dots: false,             // 슬라이드 바닥에 점 표시 여부
        infinite: true,         // 무한반복 여부
        speed: 800,             // 슬라이드 이동 속도
        slidesToShow: 1,        // 한 번에 보여줄 슬라이드 개수
        slidesToScroll: 1,      // 한 번에 스크롤하는 슬라이드 개수
        autoplay: true,         // 자동 슬라이드 여부
        autoplaySpeed: 5000,    // 자동 슬라이드 속도
        nextArrow: (
            <NextDiv>
                <NextBtn />
            </NextDiv>),
        prevArrow: (
            <PrevDiv>
                <PrevBtn />
            </PrevDiv>
        ),
    }

    return (
        <div className="img_area">
            <StyledSlider {...settings}>
                {images1.map((image, idx) => (
                    <div key={idx}>
                       {/* <img src={require(`./../../img/${image}`).default} alt={`slide-${idx}`} />*/}
                        <img src={image} alt={`slide-${idx}`} />
                    </div>
                ))}
            </StyledSlider>
        </div>
    )
}
const StyledSlider = Styled(Slider)`
    height: 500px;
    width: 100%;
    position: relative;
    .slick-prev::before,
    .slick-next::before{
        opacity: 0;
        display: none;
    }
    .slick-slide div {
        cursor: pointer;
    }
`;

const NextDiv = Styled.div`
    width: 30px;
    height: 30px;
    position: absolute;
    right: 16px;
    z-index: 99;
    text-align: right;
    line-height: 30px;
`;

const PrevDiv = Styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 16px;
  z-index: 99;
  text-align: left;
  line-height: 30px;
`;


export default Banner;