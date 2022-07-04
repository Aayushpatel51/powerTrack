import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Demo from './Demo';
import axios from 'axios';

function LiquorSlider() {
    // let settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 1000,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     autoplay: true,
    //     responsive: [
    //         {
    //             breakpoint: 1000,
    //             settings: {
    //               dots: false,
    //               infinite: true,
    //               speed: 500,
    //               slidesToShow: 3,
    //               slidesToScroll: 1,
    //               autoplay: true,
    //             }
    //         },
    //     {
    //       breakpoint: 750,
    //       settings: {
    //         dots: false,
    //         infinite: true,
    //         speed: 500,
    //         slidesToShow: 2,
    //         slidesToScroll: 1,
    //         autoplay: true,
    //       }
    //     },
    //     {
    //         breakpoint: 500,
    //         settings: {
    //           dots: false,
    //           infinite: true,
    //           speed: 500,
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //           autoplay: true,
    //         }
    //       }
    //     ]
    // }
    const [productCategory, setProductCategory] = useState([])
  
    useEffect(()=>{
      const getProductCategory = async () =>{
        try{
          const res = await axios.get("http://localhost:6100/api/v1/liquor-stores");
          setProductCategory(res.data.list)
  
        }catch(err){
          console.log(err)
        }
      }
      getProductCategory() 
    },[])
  return (
    // <Container>
    //     {productCategory.map((item,index)=>(
    //         <Demo item={item} key={index}/>
    //     ))}
    // </Container>
    <></>
  )
}

export default LiquorSlider

const Container = styled.div`

    justify-content: center;
    margin: 50px auto;
    width: calc(100vw - 20vw);
    h1{
        color: #5d8efe;
        font-weight: 600;
        text-transform: uppercase;
        font-size: 22px;
    }

`
