import React, { useState } from 'react'
import styled from 'styled-components'


function LiquorProduct(item) {
    
    const [tab, setTab] = useState(1)

    const toggleTab = (index) =>{
        setTab(index)
    }
  return (
    <>
    <ContainerDetails>
    <Wrap>
    <div className="left-content">
        <img src={'http://localhost:6100/' + item.item.liqourImage} />
    </div>
    <div className="right-content">
        <h1>{item.item.title}</h1>
        <p>{item.item.description}</p>                    
        <ul className="details">
            <li><img src="/images/review.png" /><span>(26 customer review)</span></li>
            <li className="cost">$ {item.item.price}</li>
            <li className="info">Sku : 009</li>
            <li className="info">Category: {item.item.category}</li>
            {item.item.tags == " " ?  " " : <li className="info" >Tags:{ item.item.tags.map((value, index) => (
                 <span key={index}>{value}</span> 
            )) }</li> }
        </ul>
        <div className="share">
            <ul>
                <li>Share:</li>
                <li><a href="#"><img src="/images/web-icon/My-Profile/Path-258.svg" /></a></li>
                <li><a href="#"><img src="/images/web-icon/My-Profile/twitter.svg" /></a></li>
                <li><a href="#"><img src="/images/web-icon/My-Profile/Group-1610.svg" /></a></li>
            </ul>
        </div>
    </div>
    </Wrap>
    </ContainerDetails>
    <Container>
        <Tabs>
            <div className={tab === 1 ? "tabs active" : "tabs"} onClick={()=> toggleTab(1)}>Description</div>
            <div className={tab === 2 ? "tabs active" : "tabs"} onClick={()=> toggleTab(2)}>Additional information</div>
            <div className={tab === 3 ? "tabs active" : "tabs"} onClick={()=> toggleTab(3)}>Reviews (26)</div>
        </Tabs>
        <Content>
            <div className={tab === 1 ? "tabs-content active" : "tabs-content"}>
                <p>{item.item.description}</p>
            </div>
            <div className={tab === 2 ? "tabs-content active" : "tabs-content"}>
                <p>{item.item.additionalInfo}</p>
            </div>
            <div className={tab === 3 ? "tabs-content active" : "tabs-content"}>
                <p>Reviews</p>
            </div>
        </Content>
    </Container>
    </>
  )
}

export default LiquorProduct

const ContainerDetails = styled.div`
    padding: 100px 0 0 0;
    display: flex;
    justify-content: center;
`

const Wrap = styled.div`
    display: flex;
    width: calc(100vw - 20vw);
    justify-content: center;
    height: 550px;

    @media (max-width:750px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 15px;
        height: 100%;
    }

    .left-content{
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        img{
            height: 400px;
        }
    }
    .right-content{
        width: 50%;
        height: 100%;

        @media (max-width:750px){
            width: 100%;
        }

        h1{
            color: #ef4323;
            font-weight: 600;
            letter-spacing: 1px;
        }
        p{
            color: #9fa1a2;
            font-size: 16px;
        }
        .details{
            padding: 0;
            li{
                list-style: none;
                display: flex;
                align-items: center;
                img{
                    height: 20px;
                    margin-right: 10px;
                }
                span{
                        color: #c7cacb;
                    }
            }
            .cost{
                    color: #5d8efe;
                    font-size: 18px;
                    margin-bottom: 15px;
                    margin-top:20px;
                    font-weight: 700;
            }
            .info{
                color: #000000;
                margin-bottom: 6px;
                font-weight: 600;
                span{
                    padding: 0 10px;
                }
            }
        }
        .share{
            margin-top:10px;
            ul{
                padding: 0;
                display: flex;
                align-items:center;
                li{
                    list-style: none;
                    margin-right: 15px;
                    font-size: 18px;
                    img{
                        height: 15px;
                    }
                }
            }
        }
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction: column;
    margin-bottom: 30px;
`

const Tabs = styled.div`
    display: flex;
    justify-content: center;
    width: calc(100vw - 20vw);
    margin-bottom: 20px;
    border-bottom: 1px solid #9fa1a23b;
    .tabs{
        width: 200px;
        display: flex;
        justify-content: center;
        height:40px;
        cursor: pointer;
    }
    .active{
        position: relative;
        &:after{
            content: "";
            width:100%;
            height:2px;
            border-radius: 50px;
            background: #ef4323;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
        }
    }
`

const Content = styled.div`
    width: calc(100vw - 20vw);
    .tabs-content{
        color: #9fa1a2;
        display: none;
    }
    .active{
        display: block;
    }
`