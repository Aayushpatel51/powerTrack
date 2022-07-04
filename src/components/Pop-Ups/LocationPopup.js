import React from 'react'
import styled from 'styled-components'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import TextField from '@mui/material/TextField';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CloseIcon from '@mui/icons-material/Close';


function LocationPopup({trigger, setTrigger}) {
  return (trigger) ? (
    <Container>
        <Content>
            <CloseIcon className="closeIcon" onClick={() => setTrigger(false)} />
            <Title>
                <p>Power Trac</p>
                <h1>Location</h1>
            </Title>
            <Image>
                <img src="/images/web-images/Location-Pop-up/location.svg" />
            </Image>
            <Detail>
                <div className="search-container">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        label="Search"
                    />
                    <SearchRoundedIcon className="searchIcon" />
                </div>
            </Detail>
            <StoreAddress>
            <Store>
                <div className="addName">
                    <h2>#19</h2>
                    <p>2541 S Main St Pearland Texas 77584 (977.5 mi)</p>
                    <LocationOnOutlinedIcon  className="locaIcon"/>
                </div>
            </Store>
            <Store>
                <div className="addName">
                    <h2>#19</h2>
                    <p>2541 S Main St Pearland Texas 77584 (977.5 mi)</p>
                    <LocationOnOutlinedIcon  className="locaIcon"/>
                </div>
            </Store>
            <Store>
                <div className="addName">
                    <h2>#19</h2>
                    <p>2541 S Main St Pearland Texas 77584 (977.5 mi)</p>
                    <LocationOnOutlinedIcon  className="locaIcon"/>
                </div>
            </Store>
            <Store>
                <div className="addName">
                    <h2>#19</h2>
                    <p>2541 S Main St Pearland Texas 77584 (977.5 mi)</p>
                    <LocationOnOutlinedIcon  className="locaIcon"/>
                </div>
            </Store>
            <Store>
                <div className="addName">
                    <h2>#19</h2>
                    <p>2541 S Main St Pearland Texas 77584 (977.5 mi)</p>
                    <LocationOnOutlinedIcon  className="locaIcon"/>
                </div>
            </Store>
            </StoreAddress>
        </Content>
    </Container>
  ) : "";
}

export default LocationPopup

const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4); 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 11;
    left: 0;
`

const Content = styled.div`
    width: 450px;
    height: 600px;
    background: white;
    border-radius: 25px;
    position: relative;
    .closeIcon{
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;
    }
    @media (max-width: 500px) {
        width: 90%;
    }
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    p{
    color:#ef4323;
    font-weight:600;
    font-size: 22px;
    margin: 10px 0 0 0;
  }
  h1{
    color:#ef4323;
    margin: 0;
    font-size: 32px;
  }
`

const Image = styled.div`
    img{
        @media (max-width: 500px) {
        width: 100%;
        }
    }
`
const Detail = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    .search-container{
        position: relative;
        display: flex;
        align-items: center;
        width: 90%;
        justify-content: center;

        .MuiOutlinedInput-root {
            border-radius: 50px;
            height: 45px;
        }
        .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root{
            top: -5px;
        }

        .searchIcon{
            position: absolute;
            right: 15px;
        }
    }
`

const Store = styled.div`
    width: 100%;
    background-color:#f9f9f9;
    margin: 5px 0;
    border-radius: 25px;
    height: 65px;
    .addName{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-around;
    p{
        color: black;
        margin: 0;
        font-size: 18px;
        width: 70%;
        font-weight: 600;
    }
    h2{
        color: #ef4323;
    }
    .locaIcon{
        border: 1px solid #ef4323;
        border-radius: 50px;
        padding: 5px;
        color: #ef4323;
    }
}
`

const StoreAddress = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    height: 200px;
    margin-top: 25px;
    border-radius:  25px;

    &::-webkit-scrollbar{
        display: none;
    }
`
