import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

function Login() {
  return (
    <Container>
        <Wrap>
            <ContainerLeft>
                <p>Welcome</p>
                <h2>Power Trac</h2>
                <LoginField>
                    <TextField id="standard-basic" label="Email / Phone Number" variant="standard" />
                    <TextField id="standard-basic" label="Password" type="password" variant="standard" />
                    <Link className="forgot-password" to="/forgot">Forgot Password?</Link>
                    <Link className="logIn-btn" to="/">Login</Link>
                </LoginField>
                <Seprate>
                    <p>OR</p>
                </Seprate>
                <SocialButton>
                    <Button variant="contained" className="facebook"><FacebookIcon /> Facebook</Button>
                    <Button variant="contained" className="google"><GoogleIcon /> Google</Button>
                    <Button variant="contained" className="apple" ><AppleIcon /> Apple</Button>
                </SocialButton>
                <p className="noaccount">Don't you have account ?<Link className="signup" to="/singup">Sign up</Link></p>
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

export default Login

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
    .noaccount{
        color: #968a8a;
        margin-bottom: 0;
        font-size: 12px;
        position: absolute;
        bottom: 15px;
        margin: 0;
        text-align: center;
        width: 85%;

        .signup{
            color: #ef4323;
            font-weight: 700;
            cursor: pointer;
            text-decoration: none;
        }
    }
`

const LoginField = styled.div`
    display: flex;
    flex-direction: column;
    .css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
        margin: 15px 0;
    }
    .forgot-password{
        cursor: pointer;
        color: #5d8efe;
        font-weight: 600;
        font-size: 14px;
        text-decoration: none;
        text-align: end;
    }
    .logIn-btn{
        padding: 15px 0;
        margin: 15px 0;
        text-align: center;
        text-decoration: none;
        background-color: #ef4323;
        border-color: #ef4323;
        color: #ffffff;
        font-weight: 600;
        border-radius: 35px;
    }
`

const Seprate = styled.div`
    p{
        color: #5d8efe;
        font-weight: 600;
        margin: 10px 0;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p:before{
        content: "";
        width: 40%;
        position: absolute;
        left: 0;
        border-radius: 5px;
        border: 1px solid #e9e9e9;
    }
    p:after{
        content: "";
        width: 40%;
        position: absolute;
        right: 0;
        border-radius: 5px;
        border: 1px solid #e9e9e9;
    }


`

const SocialButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0px;
    .facebook{
        background: #4064ad;
    }
    .google{
        background: #ef4323;
    }
    .google:hover{
        background: #ef4323;
    }
    .apple{
        background: #000000;
    }
    .apple:hover{
        background: #000000;
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