import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Testimonial() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
  return (
    <Container>
        <LeftContainer>
            <p>We Proved, <br /> We are the best</p>
            <h1>What people say <br /> about Power Trac.</h1>
        </LeftContainer>
        <RightContainer>
            <Carousel {...settings}>
                <Wrap>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                    <div>
                        <h4>Dhaval Patel  <span>Our valuable customer</span></h4>
                        <img src="/images/star.png" />
                    </div>
                </Wrap>
                <Wrap>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                    <div>
                        <h4>Dhaval Patel  <span>Our valuable customer</span></h4>
                        <img src="/images/star.png" />
                    </div>
                </Wrap>        
                <Wrap>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                    <div>
                        <h4>Dhaval Patel  <span>Our valuable customer</span></h4>
                        <img src="/images/star.png" />
                    </div>
                </Wrap>        
                <Wrap>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                    <div>
                        <h4>Dhaval Patel  <span>Our valuable customer</span></h4>
                        <img src="/images/star.png" />
                    </div>
                </Wrap>
            </Carousel>
        </RightContainer>
    </Container>
  )
}

export default Testimonial

const Container = styled.div`
    display: flex;
    width: 100%;
    height:400px;
    margin: 50px 0;
    @media (max-width:1050px){
        flex-direction: column;
        height: 100%;
        margin: 5px 0 50px 0;
    }
`

const LeftContainer = styled.div`
    width: 50%;
    padding: 10px 95px;

    @media (max-width: 1050px){
        width: 65%;
        margin: 10px auto;
        padding: 0;
    }

    @media (max-width: 400px){
        padding: 10px 25px;
        width: 65%;
    }

    p{
        color: #ef4323;
        text-transform: uppercase;
        font-weight: 700;
    }
    h1{
        color: #19227d;
        font-weight: 700;
        font-size: 55px;
        line-height: 1.2;
        @media (max-width: 1250px){
            font-size: 45px;
        }
        @media (max-width:765px){
            font-size: 32px;
        }
    }
`

const RightContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width:1050px){
        margin: 5px auto;
        width: 90%;
    }
`
const Carousel = styled(Slider)`
    width: 90%;
    height: 200px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 20px;
    border-radius: 15px;

    @media (max-width:1050px){
        width: 100%;
    }

    ul li button {
        &:before {
            font-size: 10px;
            color: rgb(150, 158, 171);
        }
    }

    .slick-prev, .slick-next{
        display: none !important;
    }

    li.slick-active button:before {
        color: white;
    }

    .slick-list {
        overflow: hidden;
    }

    button{
        z-index: 1;
    }
    .slick-dots{
        position: absolute;
        left: -90%;
        width: 150px;
        bottom: 0px;
        @media (max-width:1050px){
            left: -10px;
            width: 100%;
            bottom: -35px;
        }   
    }
    .slick-dots li button::before {
        font-size: 15px;
    }
    .slick-dots li.slick-active button:before{
            color: #ef4323;
    }
`
const Wrap = styled.div`
    p{
        font-weight: 600;
        color: #968a8a;

        @media (max-width:500px){
            font-size: 14px;
            margin: 0;
            padding: 0;
        }

    }
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4{
            display: flex;
            flex-direction: column;
            line-height: 2;
            margin: 0;
            color:#19227d;
            span{
                color: #d9d9d9;
                @media (max-width:550px){
                    font-size: 12px;    
                }
            }
            @media (max-width:550px){
                line-height: 1.5;
                margin: 10px 0;
            }
        }
        img{
            height: 25px;
        }
    }
`