
import styled from "styled-components"

const NumberSelector = ({selectedNumber,setSelectedNumber, error, setError}) => {

    const arrNumber = [1,2,3,4,5,6];
    
    

  return (
    <NumberSelectorContainer>
      <h5>{error}</h5>
      <div className='flex'>
      {arrNumber.map((value,i)=>(
        <Box isSelected={value==selectedNumber}  onClick={() => setSelectedNumber(value)} key={i} className="box">{value}</Box>
      )
      )}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex{
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 18px;
    font-weight: 500;
    margin-top: 5px;
  }
  h5{
    color: red;
    margin-bottom: 5px;
  }
`
const Box = styled.div`
    height: 72px;
    width: 72px;
    color: ${(props) => (props.isSelected ? "black" : "white")};
    border: 2px solid white;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "white" : "black")};
    cursor: pointer;

`
