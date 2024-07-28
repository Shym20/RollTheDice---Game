import React from 'react'
import styled from 'styled-components'


const StartGame = ({toggle}) => {
  return (
    <Container>
      
      <img src="../dicess.jpg" alt="" />
      
      <div>
        <h1>
          Roll The Dice
        </h1>
        <Button onClick={toggle}>
          Play Now
        </Button>
      </div>
    </Container>
  )
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  img{
    width: 900px;
    height: 76vh;
    margin-left: -90px;
  }
  h1{
    font-size: 60px;
    white-space: nowrap;
    color: white;
  }
`;
const Button = styled.button`

  padding: 10px 18px;
  background: whitesmoke;
  border-radius: 5px;
  color: black;
  min-width: 220px;
  border: none;
  font-size: 20px;
  font-weight: 600;
  transition: 0.4s background ease-in;

  &:hover{
    background-color: grey;
    cursor: pointer;
    color: white;
    transition: 0.3s background ease-in;
  
  }
  `;
