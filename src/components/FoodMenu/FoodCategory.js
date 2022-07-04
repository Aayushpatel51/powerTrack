import React from 'react'
import styled from 'styled-components'


function FoodCategory({item, setPopUp}) {

 

  return (
    <Container>
    
      <HomeCategory>
        <img src="/images/web-images/Menu-Page/breakfast.jpg" />
        <p>{item.category}</p>
      </HomeCategory>
    
  </Container>
  )
}

export default FoodCategory

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
    height: 200px;
    position: relative;
    transition: all 250ms ease-in-out;
    cursor: pointer;


     img{
      object-fit: cover;
      width: 100%;
      height: 200px;
      margin-right: 10px;
      border-radius: 25px;
      cursor: pointer;
    }
    p{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 22px;
      color: white;
      font-weight: bold;
      position: absolute;
      position: absolute;
      background: rgba(0, 0, 0, 0.3);
      margin-left: -10px;
      border-radius: 25px;
      text-transform: uppercase;
    }
    &:hover{
        object-fit:cover;
        transform: scale(1.05);
    }

`