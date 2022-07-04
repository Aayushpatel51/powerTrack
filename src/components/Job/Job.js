import React, {useState} from 'react'
import styled from 'styled-components'
import FinalForm from './FinalForm'


function Job() {
  return (
    <>
    <Container>
        <Content />    
    </Container>
    <FinalForm />
    </>
  )
}

export default Job

const Container = styled.div`
    min-height: calc(100vh - 100px);
    position: relative;
    display: flex;
    justify-content: center;
    align-items:top;
    background: rgba(0, 0, 0, 0.2); 

    &:before{
        content:"";
        background: url('/images/web-images/Home-Page/bg-transparent.svg') center center / cover no-repeat fixed;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
    }
`
const Content = styled.div`
    width: 100%;
    padding: 60px 30px;
    display: flex;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
`

