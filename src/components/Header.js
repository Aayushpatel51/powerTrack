import React, { useState } from 'react';
import styled from 'styled-components'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { NavLink, Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CartPopUp from './Pop-Ups/CartPopUp';


function Header() {

    const [navOpen, setNavOpen] = useState(false);
    const [popUp, setPopUp] = useState(false)

  return (
    <Nav>
        <NavLink to='/' exact = "true">
            <Logo src="/images/logo-img.png" />
        </NavLink>
        <NavMenu>
            <NavLink to="/foodmenu" className="navbar" activeclassname="active">
                Food Menu 
            </NavLink>
            <NavLink to="/location" className="navbar" activeclassname="active">
                Locations
            </NavLink>
            <NavLink to="/novelties" className="navbar" activeclassname="active">
                Novelties
            </NavLink>
            <NavLink to="/liquorstore" className="navbar" activeclassname="active">
                Liquor Store
            </NavLink>
            <NavLink to="/about" className="navbar" activeclassname="active">
                About us
            </NavLink>
            <NavLink to="/job" className="navbar" activeclassname="active">
                Jobs
            </NavLink>
        </NavMenu>
        <StoreLocation onClick={()=> setPopUp(true)}>
            <ShoppingBagOutlinedIcon className="cart" />
            <span>2541 S Main St...</span>
        </StoreLocation>
        <div className="profile">
            <UserImg src="/images/unnamed.jpg" />
        </div>
        <div className="NavIcon">
            <ShoppingBagOutlinedIcon className="cart" onClick={()=> setPopUp(true)}/>
            <div onClick={()=>{setNavOpen((curr) => !curr)}}>
                {navOpen ? <CloseIcon className="MenuIcon" /> : <MenuIcon className="MenuIcon"/>}
            </div>
        </div>
        {navOpen &&(
        <ExtendedMenu navOpen={navOpen}>
            <Link to="/foodmenu" className="navbar" onClick={()=> {setNavOpen(false)}} >
                <span>Food Menu</span>
            </Link>
            <Link to="/location" className="navbar" onClick={()=> {setNavOpen(false)}}>
                <span>Locations</span>
            </Link>
            <Link to="/novelties" className="navbar" onClick={()=> {setNavOpen(false)}}>
                <span>Novelties</span>
            </Link>
            <Link to="/liquorstore" className="navbar" onClick={()=> {setNavOpen(false)}}>
                <span>Liquor Store</span>
            </Link>
            <Link to="/about" className="navbar" onClick={()=> {setNavOpen(false)}}>
                <span>About us</span>
            </Link>
            <Link to="/job" className="navbar" onClick={()=> {setNavOpen(false)}}>
                <span>Jobs</span>
            </Link>
            <img src="/images/unnamed.jpg" />
        </ExtendedMenu>
        )}
        <CartPopUp trigger={popUp} setTrigger={setPopUp} />
    </Nav>
  )
}

export default Header;

const Nav = styled.div`
    height: 100px;
    background: #19227d;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 36px;
    @media (max-width: 1000px){
        justify-content: space-between;
    }

    .NavIcon{
        display: flex;
        .MenuIcon{
        font-size: 35px;
        cursor: pointer;
        display: none;

        @media (max-width: 1000px){
            display: flex;
        }
        }
        .cart{
            color: blue;
            margin-right: 5px;
            background: white;
            padding: 5px 5px;
            display: none;
            align-items: center;
            border-radius: 50px;
            margin-right: 25px;
            width: 25px;
            height: 25px;
            @media (max-width: 1000px){
            display: flex;
            }
        }
    }
`

const Logo = styled.img`
    width: 200px;
    @media (max-width: 400px){
        width: 150px;
    }
`

const NavMenu = styled.div`
    display: flex;
    flex: .8;
    margin-left: 25px;
    align-items: center; 
    justify-content: center;

    @media (max-width: 1180px){
        margin-left: 10px;
    }
    @media (max-width: 1000px){
            display: none;
    }

    .navbar{
        display: flex;
        align-items: center;
        padding: 0 12px;
        margin: 0 12px; 
        cursor: pointer;
        text-decoration: none;
        color: white;
        font-size: 13px;
        letter-spacing: 1.42px;
        text-transform: uppercase;
        position: relative;
        font-weight: bold;

        &:after{
                content: "";
                height: 2px;
                background-color: white;
                position: absolute;
                bottom: -6px;
                left: 0;
                right: 0;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 500ms ease-in-out;
            }

        @media (max-width: 1180px){
            padding: 0px 8px;
        }


        @media (max-width: 1180px){
            font-size:11px;
        }
  
        &:hover{
            &:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
    .active{
        display: flex;
        align-items: center;

        cursor: pointer;
        text-decoration: none;
        color: white;
        font-size: 13px;
        letter-spacing: 1.42px;
        text-transform: uppercase;
        position: relative;
        font-weight: bold;
    }
    .active:after{
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        bottom: -6px;
        left: 0;
        right: 0;
        opacity: 1 !important;
        transform-origin: left center;
        transform: scaleX(1);
        transition: all 500ms ease-in-out;
    }
`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius:50px;
    cursor: pointer;
    @media (max-width: 1180px){
        width: 40px;
        height: 40px;
    }
    @media (max-width: 1000px){
            display: none;
    }
`   

const StoreLocation = styled.a`
    background: white;
    color: black;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    border-radius: 50px;
    flex: 0.2;
    margin-right: 25px;
    cursor: pointer;

    .cart{
        color: blue;
        margin-right: 5px;

        @media (max-width: 1180px) {
            width: 18px;
        }
    }
    span{
        color: orange;  
        font-weight: bold;
        font-size: 15px;
        @media (max-width: 1180px){
            font-size: 11px;
        }
    }
    @media (max-width: 1180px){
        margin-right:5px;
        padding: 2px 9px;
    }
    @media (max-width: 1000px){
            display: none;
    }
`

const ExtendedMenu = styled.div`
    position: absolute;
    height: calc(100vh - 100px);
    width: 100vw;
    top: 100px;
    left: 0;
    right: 0;
    bottom: 0;
    background: #19227d;
    z-index: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .navbar {
        text-decoration: none;
        margin: 10px;
        span{
            color: white;
            font-weight: 800;
            font-size: 28px;
            letter-spacing: 1.42px;
            text-transform: uppercase;
            position: relative;

            &:after{
                content: "";
                height: 2px;
                background-color: white;
                position: absolute;
                bottom: -6px;
                left: 0;
                right: 0;
                opacity: 0;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 500ms ease-in-out;
            }
        }
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }

    img{
        width: 48px;
        height: 48px;
        border-radius:50px;
        cursor: pointer;
        margin-top:15px;
    }
`