import React from 'react'
import styled from 'styled-components';

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play this game ?</h2>
      <div className="text">
        <p>• Select any number from 1 to 6 shown</p>
        <p>• Click on the dice</p>
        <p>• After clicking on dice, if selected number is equal to the duce number then your score will be increment by that number</p>
        <p>• But if its not matches, then you score will be deducted with -2</p>
      </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
    max-width: 600px;
    margin: 0 auto;
    background-color: #fbf1f1;
    color: black;
    padding: 20px;
    margin-top: 10px;
    border-radius: 10px;
    h2{
        font-size: 20px;
    }
    p{
        color: black;
        font-size: 14px;
    }
    .text{
        margin-top: 18px;
    }
`
