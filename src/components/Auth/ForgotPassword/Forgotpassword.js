import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";


function Forgotpassword() {
  return (
    <Container>
        <Wrap>
            <ContainerLeft>
                <p>Welcome</p>
                <h2>Power Trac</h2>
                <LoginField>
                    <TextField id="standard-basic" label="Email / Phone Number" variant="standard" />
                    <Link className="logIn-btn" to="/">Send</Link>
                </LoginField>
            </ContainerLeft>
            <ContainerRight>
                <p className="discover">Discover With</p>
                <h1>Power Trac</h1>
                <p className="details">Power Trac is always looking for unique products or items we Can offer our customers. Please see guidelines for becoming a vendor on our Power Trac is always looking for unique products or items we Can offer our customers. Please see guidelines for becoming a vendor on our</p>
            </ContainerRight>
        </Wrap>
    </Container>
  )
}

export default Forgotpassword

const Container = styled.div`
    background: url('/images/Group.png') center center / cover no-repeat fixed;
    width: 100vw;
    height: 100vh;
    position: absolute;
    z-index: 9999;
    top: 0;
`
const Wrap = styled.div`
    width: 75%;
    margin: 170px auto;
    display: flex;
`
const ContainerLeft = styled.div`
    width: 415px;
    display: flex;
    flex-direction: column;
    background: white;
    height: 615px;
    border-radius: 10px;
    padding: 30px;
    position: relative;

    p{
        margin: 50px 0 0 0;
        color: #ef4323;
        font-weight: 700;
        letter-spacing: 1px;
    }
    h2{
        margin: 0;
        color: #19227d;
        font-weight: 700;
        letter-spacing: 3px;
        font-size: 32px;
    }
`

const LoginField = styled.div`
    display: flex;
    flex-direction: column;
    .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
        margin: 15px 0;
    }
    .logIn-btn{
        padding: 15px 0;
        margin: 35px 0;
        text-align: center;
        text-decoration: none;
        background-color: #ef4323;
        border-color: #ef4323;
        color: #ffffff;
        font-weight: 600;
        border-radius: 35px;
    }
`


const ContainerRight = styled.div`
    width: 750px;
    padding: 100px;
    .discover{
        margin: 0;
        color: white;
        font-size: 22px;
        font-weight: 600;
        letter-spacing: 2px;
    }
    h1{
        margin: 0;
        font-size: 48px;
        letter-spacing: 7px;
        color: white;
    }
    .details{
        color: white;
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 2px;
    }
`