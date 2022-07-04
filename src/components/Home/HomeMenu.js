import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import LocationPopup from '../Pop-Ups/LocationPopup'
import HomeCate from './HomeCate';


function HomeMenu() {
  const [popUp, setPopUp] = useState(false)

  const [productCategory, setProductCategory] = useState([])
  
  useEffect(()=>{
    const getProductCategory = async () =>{
      try{
        const res = await axios.get("http://localhost:6100/api/v1/product-categories");
        setProductCategory(res.data.list)

      }catch(err){
        console.log(err)
      }
    }
    getProductCategory() 
  },[])
 

  return (
    <Container>
      <h1>Satisfy your Cravings</h1>
      <Wrap>
        {Object.values(productCategory).map((item,index)=>(
          <HomeCate key={index} item={item} setPopUp={setPopUp} />
        ))}
      </Wrap>
      <LocationPopup  trigger={popUp} setTrigger={setPopUp}/>    
    </Container>
  )
}

export default HomeMenu

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

const Wrap = styled.div`
    display:grid;
    white-space: nowrap;
    padding: 20px;
    grid-gap: 50px;
    grid-template-columns: repeat(4, minmax(0,1fr));

    &::-webkit-scrollbar{
      display:none;
    }
    @media (max-width:1000px){
      grid-template-columns: repeat(3, minmax(0,1fr));
    }
    @media (max-width:650px){
      grid-template-columns: repeat(2, minmax(0,1fr));
    }
    @media (max-width:450px){
      grid-template-columns: repeat(1 , minmax(0,1fr));
    }
`