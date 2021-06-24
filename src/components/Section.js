import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section(props) {
    return (
        <Wrap bgImage={props.img}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.des}</p>
                </ItemText>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.left}
                        </LeftButton>
                        {props.right &&
                            <RightButton>
                                {props.right}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>

                <Fade top>
                    <DownArrow src="/images/down-arrow.svg" /> 
                </Fade>
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width:100vw; 
    height:100vh;  
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    /* background-image:url('/images/model-s.jpg'); */
    display:flex;
    flex-direction:column;
    justify-content:space-between;  //vertical
    align-items:center;  //horizontal
    background-image:${props => `url("/images/${props.bgImage}")`}
    
    
`

const ItemText = styled.div`
      text-align:center;
      padding-top:14vh
`

const ButtonGroup = styled.div`
      display:flex;
      ${'' /* text-align:center; */}
      margin-bottom:30px;
      
      @media (max-width:768px){
          flex-direction:column;
      }
      
`
const LeftButton = styled.div` 
      background-color:rgba(23,26,32,0.8);
      height:40px;
      width:256px;
      color:white;
      display:flex;
      justify-content:center;
      align-items:center;
      border-radius:100px;
      opacity:0.85;
      text-transform:uppercase;
      font-size:12px;
      cursor:pointer;
      margin:8px;
     
`
const RightButton = styled(LeftButton)`
      background:white;
      opacity:0.65;
      color:black;
      font-weight:bold;
`
const DownArrow = styled.img`
     height:40px;
     display:flex;
     margin: auto;
     overflow-x:hidden;
     animation:animateDown infinite 1.5s;
`
const Buttons = styled.div`
     
 
`
