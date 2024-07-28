import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import Rules from './Rules'
const GamePlay = () => {
  const [score,setScore] = useState(0);
  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("")
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

const roleDice = () => {
  if(!selectedNumber){ 
    setError("Please select a number first !!")
    return
  };
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);

    
    if(selectedNumber == randomNumber){
      setScore((prev)=> prev + randomNumber);
    }else{
      setError("")
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);

}
 function resetScore(){
  setScore(0);
 }
 function visible(){
  setShowRules((prev) => !prev)
 }

  return (
    <MainContainer>
      <div className="top_section">
      <TotalScore score={score}/>
      <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError}/>
      </div>
      <RollDice currentDice={currentDice} roleDice={roleDice}/>
      <div className="btns">
        <Button onClick={resetScore}>Reset Score</Button>
        <Buttonn onClick={visible}>{showRules ? "Hide" : "View"} Rules</Buttonn>
      </div>
     { showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`
   .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
   }
   .btns{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const Button = styled.button`

  padding: 7px 18px;
  background: #ac9e9e;
  border-radius: 5px;
  color: black;
  width: 170px;
  margin: 5px auto;
  border: none;
  font-size: 15px;
  font-weight: 600;
  transition: 0.4s background ease-in;

  &:hover{
    background-color: #fbf1f1;
    cursor: pointer;
    transition: 0.3s background ease-in;
  
  }

  `;

const Buttonn = styled.button`

padding: 7px 18px;
background: #ac9e9e;
border-radius: 5px;
color: black;
width: 170px;
margin: 5px auto;
border: none;
font-size: 15px;
font-weight: 600;
transition: 0.4s background ease-in;

&:hover{
  background-color: #fbf1f1;
  cursor: pointer;
  transition: 0.3s background ease-in;

}

`;