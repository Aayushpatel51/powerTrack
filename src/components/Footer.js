import React from 'react'
import styled from 'styled-components'


function Footer() {
  return (
    <Container>
        <LeftContainer>
            <FooterLogo>
                <img src="/images/web-icon/Home-Page/footer-logo.svg" />
            </FooterLogo>
            <ul>
                <li><a href="" ><img src="/images/web-icon/Home-Page/facebook.svg" /></a></li>
                <li><a href="" ><img src="/images/web-icon/Home-Page/twitter.svg" /></a></li>
                <li><a href="" ><img src="/images/web-icon/Home-Page/google-plus.svg" /></a></li>
                <li><a href="" ><img src="/images/web-icon/Home-Page/instagram.svg" /></a></li>
            </ul>
        </LeftContainer>
        <RightContainer>
            <div>
                <h4>Information</h4>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Categories</a></li>
                    <li><a href="">Offers</a></li>
                </ul>
            </div>
            <div>
                <h4>Helpful Links</h4>
                <ul>
                    <li><a href="">Services</a></li>
                    <li><a href="">Supports</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Privacy</a></li>
                </ul>
            </div>
            <div>
                <h4>Job Applications</h4>
                <ul>
                    <li><a href="">Apply for Job</a></li>
                    <li><a href="">Inquiry</a></li>
                </ul>
            </div>
        </RightContainer>
        <AppLink>
            <p> For even better experience</p>
            <img src="/images/google.png" />
            <img src="/images/apple.png" />
        </AppLink>
    </Container>
  )
}

export default Footer

const Container = styled.div`
    background: #8eb0fd;
    padding: 2rem 1rem;
    display: flex;
    position: relative;
    height: 300px;

    @media (max-width:1000px) {
        flex-direction: column;
        height:100%;
    }
`
const LeftContainer = styled.div`
    width: 40%;
    margin-right: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1000px) {
        width:100%;
        margin: 0;
    }
    
    ul{
        text-decoration: none;
        display: flex;
        width: 400px;
        justify-content: space-evenly;
        padding: 0;
        align-items: center;
        @media (max-width: 400px) {
            width: 100%;
        }
        li{
            list-style: none;
            height: 20px;
            a{
                height: 100%;
                img{
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
    }
`
const FooterLogo = styled.div`
        position: relative;
        width: 400px;
        display: flex;
        justify-content: center;    
        align-items: center;
        &:after{
            content: "";
            height:3px;
            width: 100%;
            background-color: #19227d;
            position: absolute;
            bottom:0;
            left: 0;
            right: 0;
        }
        img{
            @media(max-width: 450px) {
                width: 100%;
            }
        }
        @media (max-width: 450px) {
            width: 300px;
        }
`

const RightContainer = styled.div`
    grid-template-columns: repeat(3, minmax(0, 1fr));
    display: grid;
    width: 50%;

    @media (max-width: 1000px) {
        width: 100%;
        margin: 30px auto;
    }

    h4{
        font-weight: 700;
        color: #19227d;
        font-size: 1.5rem;
        margin: 0;
        @media (max-width: 1160px){
            font-size: 1.2rem;
        }
        @media (max-width: 450px){
            font-size: 1rem;
        }
    }
    ul{
        padding: 0;
        li{
            list-style: none;
            height: 40px;
            display: flex;
            align-items: center;
            a{
                text-decoration: none;
                color: #19227d;
                font-weight: 500;
                font-size: 1rem;
                position: relative;

                &:after{
                    content: "";
                    height: 2px;
                    background-color: #19227d;
                    position: absolute;
                    bottom: -6px;
                    left: 0;
                    right: 0;
                    opacity: 0;
                    transform-origin: left center;
                    transform: scaleX(0);
                    transition: all 500ms ease-in-out;
                }
            }
            &:hover{
                a:after{
                    transform: scaleX(1);
                    opacity: 1;
                }
            }
        }
    }
`

const AppLink = styled.div`
    display: flex;
    position: absolute;
    right: 130px;
    top: 80%;
    @media (max-width:1000px){
        justify-content: center;
        width: 90%;
        top: 90%;
        right: 0;
    }

    p{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        color: #19227d;
        font-weight: 700;
        height: 100%;
    }
    img{
        height: 25px;
        width: 25px;
        margin: 0 5px;
    }
`