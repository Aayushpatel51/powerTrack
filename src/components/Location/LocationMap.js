import React from 'react'
import styled from 'styled-components'


function LocationMap() {
  return (
    <Container>
        <video loop muted autoPlay playsinline>
          <source src="/videos/landing.mp4" />
        </video>
        <Content>
          <div>
            <img src="/images/web-images/Location-Pop-up/location.svg" />
          </div>
        </Content>
    </Container>
  )
}

export default LocationMap

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

    div{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
`

