import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import './Novelties.scss';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function NoveGallery() {

    const [change, setChange] = useState(1);
    const [items, setItems] = useState([]);
    const [filteredItem, setFilteredItem] = useState(items)
    const [search, setSearch] = useState('')
    const [searchOut, setSearchOut] = useState([])

    let componentMounted = true;


    function toggleActive(index){
        setChange(index)
    }


    const filterItem = (cateItem) =>{
        const valueItem = items.filter((curElrm) =>curElrm.category.category === cateItem)
        setFilteredItem(valueItem);
    }

    useEffect(()=>{
        const getProductCategory = async () =>{
          try{
            const res = await axios.get("http://localhost:6100/api/v1/noveltie-product");
            if(componentMounted){
                setItems(await res.data.list)
                setFilteredItem(await res.data.list)
            }
          }catch(err){
            console.log(err)
          }
          return () =>{
            componentMounted = false
          }
        }
        getProductCategory()
      },[])

      useEffect(()=>{
        setSearchOut([])
        items.filter(val=>{
            if(val.title.toLowerCase().includes(search.toLowerCase())){
                setSearchOut(output => [
                    ...output,val
                ])
            }
        })
      },[search])


      const itemsTitle = [
        { title: 'Indomita Reserva Pinot Noir'},
        { title: 'Licor Beirao'},
        { title: 'Taylors Port'},
        { title: 'Villa Puccini Pinot Grigio'},
        { title: 'Portugal, Porto'},
        { title: 'Port wine'}
      ]

  return (
    <Container>
            <div className="nav-indi">
                <ul className="primary-nav indicator">
                    <li className={change === 1 ? "Nav-item active" : "Nav-item"} onClick={()=>{toggleActive(1)}}><button onClick={() => filterItem("vapeproducts")}>Vape Products</button></li>
                    <li className={change === 2 ? "Nav-item active" : "Nav-item"} onClick={()=>{toggleActive(2)}}><button onClick={() => filterItem("cellaccessories")}>Cell Accessories</button></li>
                    <li className={change === 3 ? "Nav-item active" : "Nav-item"} onClick={()=>{toggleActive(3)}}><button onClick={() => filterItem("kratom")}>Kratom</button></li>
                    <li className={change === 4 ? "Nav-item active" : "Nav-item"} onClick={()=>{toggleActive(4)}}><button onClick={() => filterItem("fishingproducts")}>Fishing Products</button></li>
                    <li className={change === 5 ? "Nav-item active" : "Nav-item"} onClick={()=>{toggleActive(5)}}><button onClick={() => filterItem("tourches")}>Tourches</button></li>
                    <li className={change === 6 ? "Nav-item active" : "Nav-item"} onClick={()=>{toggleActive(6)}}><button onClick={() => filterItem("healthmedicine")}>Health & Medicine</button></li>
                    <li className={change === 7 ? "Nav-item active" : "Nav-item"} onClick={()=>{toggleActive(7)}}><button onClick={() => filterItem("others")}>Others</button></li>
                </ul>
            </div>
            <TitleContainer>
                <p>Explore Our</p>
                <h1>Novelties</h1>
            </TitleContainer>
            <div className="search-bar">
                <Autocomplete
                    id="free-solo-demo"
                    freeSolo
                    options={itemsTitle.map((option) => option.title)}
                    renderInput={(params) => <TextField {...params} onChange={(e) => setSearch(e.target.value)} label="Search" />}
                />
            </div>
        <Content>
            { search <= 0 ?
                filteredItem.map((element,index) =>{
                    return (
                        <Wrap key={index}>
                            <img src={'http://localhost:6100/' + element.noveltieImg} />
                            <h1>{element.title}</h1>
                            <p>{element.description}</p>
                            <ul>
                                <li><a href="#">Pork /</a></li>
                                <li><a href="#">Veggie /</a></li>
                                <li><a href="#">Shoyu</a></li>
                            </ul>
                        </Wrap>
                    )
                }) : searchOut.map((element,index) =>{
                    return (
                        <Wrap key={index}>
                            <img src={'http://localhost:6100/' + element.noveltieImg} />
                            <h1>{element.title}</h1>
                            <p>{element.description}</p>
                            <ul>
                                <li><a href="#">Pork /</a></li>
                                <li><a href="#">Veggie /</a></li>
                                <li><a href="#">Shoyu</a></li>
                            </ul>
                        </Wrap>
                    )
                }) 
            }
        </Content>
    </Container>
  )
}

export default NoveGallery

const Container = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    position: relative;
    flex-direction: column;

    .search-bar{
        width: 90%;
        display: flex;
        justify-content: end;

        @media (max-width:550px){
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 10px auto;
        }

        .MuiOutlinedInput-root{
            border-radius: 50px;
            border:1px solid #5d8efe;
            height: 50px;
            width: 350px;

            @media (max-width:350px){
                width: 250px;
            }
        }
        .MuiInputLabel-root{
            color: #5d8efe;
        }
    }
`

const TitleContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    letter-spacing: 1.5px;
  }
`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(3, minmax(0,1fr));
    margin: 35px 0;

    @media (max-width:1250px){
        grid-template-columns: repeat(2, minmax(0,1fr));
    }
    @media (max-width:800px){
        grid-template-columns: repeat(1, minmax(0,1fr));
    }
`

const Wrap = styled.div`
    border: 3px solid rgba(249, 249, 249,0.1);
    border-radius: 10px;
    overflow: hidden;
    transition: all 250ms ease-in-out;
    cursor: pointer;
    width: 400px;
    height: 450px;
    background:#f9f9f9;
    position: relative;

    @media (max-width:400px){
        width: 90%;
        margin: 0 auto;
    }

    img{
        width: 100%;
        height: 50%;
        object-fit: cover;
    }

    &:hover{
        transform: scale(1);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    }
    h1{
        font-size: 24px;
        padding: 15px 15px 8px 15px;
    }
    p{
        font-size:14px;
        padding: 0px 15px 15px 15px;  
        color: #9fa1a2;
    }
    ul{
        display: flex;
        padding: 0;
        position: absolute;
        width: 100%;
        justify-content: flex-end;
        right: 15px;
        margin: 0;
        li{
            list-style: none;
            a{
                text-decoration: none;
                font-size: 12px;
                color: #9fa1a2;
                display: flex;

            }
        }
    }
`

