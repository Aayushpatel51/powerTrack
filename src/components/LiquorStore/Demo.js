import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import Slider from "react-slick";
import axios from 'axios';
import SlideDetails from "./SlideDetails"

function Demo() {
 
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)

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

    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
      };
  
    return (
      <Container>
        <Slider
          className="slider-arrow"   
          asNavFor={nav2}
          ref={(slider1) => setNav1(slider1)}
            {...settings}
        >
            {productCategory.map((item,index)=>(
                <SlideDetails item={item} key={index}/>
            ))}
        </Slider>
        <h1>INGREDIENTS</h1>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={1}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div>
            <Carousel>
              <div className="ingredients-img">
              <Wrap1>
                    <img src="/images/web-images/Liquor/ingredientsimg01.svg" />
                    <h5>Black Papper</h5>        
                </Wrap1>
                <Wrap1>
                    <img src="/images/web-images/Liquor/ingredientsimg02.svg" />  
                    <h5>Vodka</h5>                  
                </Wrap1> 
              </div>
              <div className="ingredients-img">
              <Wrap1>
                    <img src="/images/web-images/Liquor/ingredientsimg03.svg" />   
                    <h5>Tomato juice</h5>                          
                </Wrap1>        
                <Wrap1>
                    <img src="/images/web-images/Liquor/ingredientsimg04.svg" />    
                    <h5>Olive</h5>                        
                </Wrap1>
              </div>
            </Carousel>
          </div>
          <div>
            <h3>2</h3>
          </div>
        </Slider>
      </Container>
    );
  }

export default Demo


const Container = styled.div`
    .slider-arrow{
        .slick-prev:before, .slick-next:before{
            color: #ef4323;
            font-size: 30px;
            @media (max-width: 750px) {
              display: none;
            }
        }
        .slick-prev{
            left: -90px;

        }
        .slick-next{
            right: -90px;
        }
    }
`



const Carousel = styled.div`

    height: 350px;
    padding: 20px;
    border-radius: 15px;
    display:flex;
    justify-content: space-around;

    @media (max-width:750px){
      height: 400px;
    }

    .ingredients-img{
      display: flex;
      width: 50%;
      justify-content: space-around;
      @media (max-width:750px){
          flex-direction: column;
      }
    }
`

const Wrap1 = styled.div`
    width: 315px !important;

    @media (max-width:1550px){
        width: 250px !important;
    }

    @media (max-width:1250px){
        width: 200px !important;
    }
    @media (max-width:1000px){
        width: 150px !important;
    }

    img{
        border-radius: 10px;
        @media (max-width:1550px){
            width: 100%;
        }
    }
    h5{
        color: #000000;
        text-align: center;
        margin-top: 10px;
        font-size: 18px;
    }
`