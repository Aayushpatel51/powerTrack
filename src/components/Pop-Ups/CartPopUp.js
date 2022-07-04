import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';


function CartPopUp({trigger, setTrigger}) {

    const [counter, setCounter] = useState(1)
    const handleClick1 = () => {
        // Counter state is incremented
        setCounter(counter + 1)
      }
      
      // Function is called everytime decrement button is clicked
      const handleClick2 = () => {
        // Counter state is decremented
        counter > 1 && setCounter(counter - 1)
      }

  return (trigger) ? (
    <Container>
        <Content>
            <CloseIcon className="closeIcon" onClick={() => setTrigger(false)} />
            <Title>
                <h1>My Cart</h1>
            </Title>
            <StoreAddress>
            <Store>
                <div className="addName">
                    <img src="/images/web-images/My-Cart/cart1.svg" />
                    <div>
                        <h2>New Cabernet Sauvignon</h2>
                        <p>$ 60.00</p>
                    </div>
                    <div className="counter">
                        <button onClick={handleClick1}>+</button>
                        <p>{counter}</p>
                        <button  onClick={handleClick2}>-</button>
                    </div>
                    <CloseIcon className='cartClose' />
                </div>
            </Store>
            <Store>
                <div className="addName">
                    <img src="/images/web-images/My-Cart/cart1.svg" />
                    <div>
                        <h2>New Cabernet Sauvignon</h2>
                        <p>$ 60.00</p>
                    </div>
                    <div className="counter">
                        <button>+</button>
                        <p>1</p>
                        <button>-</button>
                    </div>
                    <CloseIcon className='cartClose' />
                </div>
            </Store>
            <Store>
                <div className="addName">
                    <img src="/images/web-images/My-Cart/cart1.svg" />
                    <div>
                        <h2>New Cabernet Sauvignon</h2>
                        <p>$ 60.00</p>
                    </div>
                    <div className="counter">
                        <button>+</button>
                        <p>1</p>
                        <button>-</button>
                    </div>
                    <CloseIcon className='cartClose' />
                </div>
            </Store>
            </StoreAddress>
            <TotalAmount>
                <p className="title">Order Total</p>
                <p className="amount">$ 115.00</p>
            </TotalAmount>
            <ContinueButton>
                <a href="#">Continue</a>
            </ContinueButton>
        </Content>
    </Container>
  ) : "" ;
}

export default CartPopUp

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
    height: 550px;
    background: white;
    border-radius: 25px;
    position: relative;
    .closeIcon{
        position: absolute;
        right: 15px;
        top: 15px;
        cursor: pointer;
        color: black;
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
    margin-top: 25px;
  h1{
    color:#ef4323;
    margin: 0;
    font-size: 32px;
  }
`

const Store = styled.div`
    width: 95%;
    background-color:#f9f9f9;
    margin: 5px auto;
    height: 100px;
    .addName{
        display: flex;
        align-items: center;
        width: 100%;
        justify-content: space-around;

    div{
        height: 100px;
        @media (max-width: 450px){
            padding: 0 5px;
        }
    }
    p{
        color: #afb0b1;
        margin: 0;
        font-size: 16px;
        width: 70%;
        font-weight: 600;
    }
    h2{
        color: #5d8efe;
        font-size: 20px;
        @media (max-width: 450px){
            font-size: 16px;
        }
    }
    .counter{
        display: flex;
        flex-direction: column;
        justify-content: center;
        button{
            height: 30px;
            width: 30px;
            border-radius: 50%;
            background-color: #19227d;
            margin-bottom: 4px;
            position: relative;
            border: none;
            color: white;
            font-size: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        p{
            text-align: center;
            width: 100%;
            color: #303030;
            margin: 2px auto;
        }
    }
    .cartClose{
        color: #c7cacb;
        font-size: 20px;
    }
}
`

const StoreAddress = styled.div`
    overflow-x: hidden;
    overflow-y: scroll;
    height: 350px;
    margin-top: 25px;

    &::-webkit-scrollbar{
        display: none;
    }
`


const TotalAmount = styled.div`
    display: flex;
    width: 90%;
    margin: 5px auto;
    align-items: center;
    justify-content: space-between;

    .title{
        margin: 0;
        color: #afb0b1;
        font-size: 16px;
        font-weight: 600;
    }
    .amount{
        margin: 0;
        color: #ef4323;
        font-weight: 600;
    }
`

const ContinueButton = styled.div`
    width: 95%;
    margin: 10px auto;
    background-color: #ef4323;
    font-weight: 600;
    text-align: center;
    padding: 10px 0;
    border-radius: 25px;

    a{
        color: white;
        text-decoration: none;
    }
`