import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import FoodCategory from './FoodCategory'


function FoodCate() {

  const [productCategory, setProductCategory] = useState([])

  useEffect(()=>{
    const getProductCategory = async () =>{
      try{
        const res = await axios.get("http://localhost:6100/api/v1/product-categories");
        setProductCategory(res.data.list)
        console.log(res.data.list._id)
      }catch(err){
        console.log(err)
      }
    }
    getProductCategory()
  },[])

  return (
    <Container>
      <p>Fresh Food</p>
      <h1>Power Trac Menu</h1>
      <Wrap>
        {Object.values(productCategory).map((item,index)=>(
          <FoodCategory key={index} item={item} />
        ))}
      </Wrap>
    </Container>
  )
}

export default FoodCate

const Container = styled.div`
  margin-left:20px;
  margin-top:50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p{
    color:white;
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

const Wrap = styled.div`
    display:grid;
    white-space: nowrap;
    padding: 20px;
    grid-gap: 50px;
    margin: 25px 0;
    grid-template-columns: repeat(2, minmax(0,1fr));
    width: calc(100vw - 20vw);

    &::-webkit-scrollbar{
      display:none;
    }
    @media (max-width: 550px){
      grid-template-columns: repeat(1, minmax(0,1fr));
    }
`

