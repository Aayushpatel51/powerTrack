import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import LiquorProduct from './LiquorProduct'
import Demo from './Demo'
import axios from 'axios';

function LiquorContent() {
    


  return (
    <>

    <Container>
        <Demo />
    </Container>
    </>
  )
}

export default LiquorContent



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