import React from 'react'
import styled from 'styled-components'


function LiquorLanding() {
  return (
    <Container>
        <video loop muted autoPlay playsinline>
          <source src="/videos/landing.mp4" />
        </video>
        <Content>
            <h6>Power Your Track With</h6>
            <h1>Power Trac</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita</p>
        </Content>
    </Container>
  )
}

export default LiquorLanding

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
    padding: 60px;
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    backdrop-filter: blur(5px);

    h6{
        margin: 0;
        font-size: 38px;
        color: white;
    }
    h1{
        margin: 0;
        font-size: 62px;
        color: white;
        position:relative;

        &::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 5px;
            border-radius:50px;
            background-color: #ef4323;
            left: 0;
            right: 0;
            bottom: -25px;
        }
    }
    p{
        font-size: 18px;
        color: white;
        width: 525px;
        margin-top: 50px;
        @media (max-width:1050px){
            width: 100%;
        }
    }
`