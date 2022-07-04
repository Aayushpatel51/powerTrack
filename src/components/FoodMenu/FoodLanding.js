import React from 'react'
import styled from 'styled-components'



function FoodLanding() {


  return (
    <Container>
        <video loop muted autoPlay playsinline>
          <source src="/videos/landing.mp4" />
        </video>
        <Content>
            <LogoOne src="/images/logo-img.png" />
            <StoreType>
              <a href="#">
                Gas Stations
              </a>
              <a href="#">
                Convenience Store
              </a>
              <a href="#">
                Liquor Stores
              </a>
            </StoreType>
            <Description>
                Get Premier Access to Raya and the last Dragon for an additional fee with a Disney+ subscription. 
                As of 01/06/22 the price of Disney+ and The Disney Bundle will increase by $1.
            </Description>
            <LogoTwo>
              <a href="#">
                <span>Place Food Order</span>
                <img src="/images/arrow.svg" alt="" />
              </a>
            </LogoTwo>
            
        </Content>
        <AppLink>
          <p>
            Get Our App
            <img src="/images/google.png" />
            <img src="/images/apple.png" />
          </p>
        </AppLink>
    </Container>
  )
}

export default FoodLanding

const Container = styled.div`
    min-height: calc(100vh - 100px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items:top;
    background: rgba(0, 0, 0, 0.2); 

    video{
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    ${'' /* &:before{
        content:"";
        background: url('/images/web-images/Home-Page/bg-transparent.svg') center center / cover no-repeat fixed;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
    } */}
`
const Content = styled.div`
    width: 100%;
    padding: 60px 30px;
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
    @media (max-width:1050px){
      padding: 60px 0px;
    }
`

const StoreType = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  a{
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    flex-direction: column;    
    font-size: 22px;
    position: relative;

    @media (max-width:550px){
      font-size: 16px;
      padding: 5px !important;
    }
    @media (max-width:550px){
      font-size: 12px;
    }
  }
  a:nth-child(2){
    border-left: 3px solid #ef4323;
    border-right: 3px solid #ef4323;
    padding: 0 25px;
  }
  a:nth-child(2):after{
    content: "";
    width: 100%;
    position: absolute;
    height: 3px;
    bottom: -25px;
    left: 0;
    right: 0;
    background: #ef4323;
  }
`

const Description = styled.p`
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    margin-bottom: 15px;
    margin-top: 50px;
    color: white;

    @media (max-width:550px) {
      padding: 0 20px;
    }
    @media (max-width:350px) {
      font-size:12px;
    }
`
const LogoTwo = styled.div`
    margin: 10px 0;
    height: 50px;
    background: white;
    width: 250px;
    border-radius: 50px;

    @media (max-width:350px) {
      height: 40px;
      width: 165px;
    }

    a{
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      text-decoration: none;
      color: #19227d;
      font-weight: 700;
      @media (max-width:350px){
        padding: 0 10px;
      }
      span{
        @media (max-width:350px){
          font-size: 12px;
        }
      }
      img{
        height: 20px;
        margin-left: 15px;
        width: 20px;
        border-radius: 50px;
        background: #ef4323;
        padding: 10px;
        @media (max-width:350px){
          height: 10px;
          width: 10px;
        }
      }
    }
`


const LogoOne = styled.img`
  height: 150px;
  width: 350px;
  @media (max-width:350px){
    height: 140px;
    width: 250px;
  }
`

const AppLink = styled.div`
    height: 50px;
    width: 200px;
    position: absolute;
    right: 10px;
    bottom: 10px;
    background: white;
    border-radius: 50px;
    p{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      color: #19227d;
      font-weight: 700;
      height: 100%;
      img{
        height: 25px;
        width: 25px;
        margin: 0 5px;
      }
    }
    @media (max-width:550px) {
      right: auto;
    }
`