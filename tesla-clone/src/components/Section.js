import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({title,description,leftButtonText,rightButtonText,backgroundImage}) {
  // console.log(props)
  return (
    <Wrap bgImage={backgroundImage}>
      <Fade bottom >
          <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
          </ItemText>
      </Fade>
      <Fade bottom>
          <ButtonGroup>
            <LeftButton>
              {leftButtonText}
            </LeftButton>

            {/* if rightbutton exists then it will run */}
            {rightButtonText && 
              <RightButton>
              {rightButtonText}
              </RightButton>
          
            }
            </ButtonGroup>
        </Fade>
       
      
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
      width : 100vw;
      height : 100vh;
      
      background-size: cover;
      background-position:center;
      background-repeat:no-repeat;
      // background-image: url('/TeslaImage/model-s.jpg');
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      align-items:center;
      background-image: ${props=>`url("/TeslaImage/${props.bgImage}")`}


`
const ItemText = styled.div`
      padding-top: 15vh;
      text-align:center;
`

const ButtonGroup =styled.div`
      display:flex;
      margin-bottom:30px;
      @media (max-width:768px){
        flex-direction:column;
      }

`

const LeftButton = styled.div`
      background-color: rgb(62,65,70);
      height: 40px;
      width: 256px;
      color: white;
      display: flex;
      justify-content: center;
      align-items:center;
      border-radius:100px;
      opacity:0.85;
      text-transform:uppercase;
      font-size: 12px;
      cursor:pointer;
      margin:8px;

`
  
const RightButton = styled(LeftButton)`
      background:white;
      opacity:0.65;
      color:black;
`