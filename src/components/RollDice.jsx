
import styled from 'styled-components';

const RollDice = ({currentDice, roleDice}) => {
      
  return (
    <DiceContainer>
        <div className='dice' onClick={roleDice}>
            <img src={`../dice/dice-six-faces-${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
      
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 48px;
    flex-direction: column;
    align-items: center;

    img{
        width: 170px;
        height: 170px;
    }
    p{
        font-size: 20px;
    }
    .dice{
        cursor: pointer;
    }
`
