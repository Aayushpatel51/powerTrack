import React, {useState} from 'react'
import styled from 'styled-components'


function About() {
    const [readMore,setReadMore]=useState(false);
    const extraContent=<div>
        <p className="extra-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
          porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
          commodi officia aliquam! Maxime.
        </p>
    </div>
    const linkName=readMore?'Read Less...':'Read More...'
  return (
    <Container>
        <video loop muted autoPlay playsinline>
          <source src="/videos/landing.mp4" />
        </video>
        <Content>
            <OurStory>
                <Title>
                    <p>Our Story</p>
                    <h1>The Power Trac</h1>
                </Title>
                <FullStory>
                    <Images>
                        <div className="top-img">
                            <img src="/images/web-images/About-us/aboutus01.svg" />
                        </div>
                        <div className="bottom-img">
                            <img src="/images/web-images/About-us/aboutus02.svg" />
                            <img src="/images/web-images/About-us/aboutus03.svg" />
                        </div>
                    </Images>
                    <AboutDetails>
                        <p>From grilled Tandoori chicken burgers to simple chicken burgers with garlic rosemary mayonnaise, put a new twist on an old barbecue Power trac with these unique and chicken burger recipes.</p>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
                        <p>From grilled Tandoori chicken burgers to simple chicken burgers with garlic rosemary mayonnaise, put a new twist on an old barbecue Power trac with these unique and chicken burger recipes.</p>
                        <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
                        {readMore && extraContent}
                    </AboutDetails>
                </FullStory>
            </OurStory>
        </Content>
    </Container>
  )
}

export default About

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

const OurStory = styled.div`
    width: 90%;
    height: 100%;
    flex-direction: column;
    background: white;
    border-radius: 25px;
    display: flex;
`

const Title = styled.div`
    margin-top:35px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 125px;
    p{
        color:#ef4323;
        font-weight:600;
        font-size: 22px;
        margin: 0;
    }
    h1{
        color:#ef4323;
        margin: 0;
        font-size: 32px;
    }
`

const Images = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    margin-right: 25px;

    @media(max-width: 1050px){
        width: 75%;
    }
    .top-img{
        width: 100%;
        img{
            width: 100%;
        }
    }
    .bottom-img{
        width: 100%;

        img:nth-child(1){
            width: 60%;
            height: 90%;
        }
        img:nth-child(2){
            width: 40%;
            height: 90%;
        }
    }
`

const FullStory = styled.div`
    display: flex;
    margin: 5px auto;
    width: 90%;


    @media (max-width: 1050px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const AboutDetails = styled.div`
    width: 70%;
    @media(max-width: 1050px){
        width: 75%;
    }
    p{
        color: #000000;
        letter-spacing: 1px;
        font-weight: 600;
        font-size: 20px;
    }
    a{
        padding-top: 20px;
        color: #5d8efe;
        font-weight: 600;
        cursor: pointer;
        text-decoration: none;
        font-size: 12px;
    }
`