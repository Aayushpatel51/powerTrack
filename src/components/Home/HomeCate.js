import React from 'react'
import styled from 'styled-components'


function HomeCate({item, setPopUp}) {

 

  return (
    <Container>
    
      <HomeCategory  onClick={()=> setPopUp(true)}>
        <img src="/images/web-images/Menu-Page/breakfast.jpg" />
        <p>{item.category}</p>
      </HomeCategory>
    
  </Container>
  )
}

export default HomeCate

const Container = styled.div`
  margin-left:20px;
  margin-top:50px;
  h1{
    color:#ef4323;
    margin-left:30px;
    font-size: 38px;
    @media (max-width:650px){
      font-size:30px;
    }
    @media (max-width:350px){
      font-size:24px;
    }
  }

`



const HomeCategory = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 350px;
    cursor: pointer;


     img{
      object-fit: cover;
      width: 100%;
      max-width: 350px;
      height: 350px;
      margin-right: 10px;
      transition: all 250ms ease-in-out;
      border-radius: 25px;
      &:hover{
        transform: scale(1.05);
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      }
    }
    p{
      width: 100%;
      max-width: 300px;
      display: flex;
      justify-content: center;
      font-size: 22px;
      color: #19227d;
      font-weight: bold;
      text-transform: uppercase;
    }

`