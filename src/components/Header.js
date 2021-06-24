import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {
    const [burgerStatus, setBurgerStatus] = useState();
    const cars = useSelector(selectCars)
    return (
        <Container>
            <a href="/">
                <img src="/images/logo.svg" alt=""/>
            </a>
            <Menu>
                {cars && cars.map((car, index) => (

                    <a key={index} href="/">{car}</a>

                ))}
            </Menu>
            <RightMenu>
                <a href="/">SHOP</a>
                <a href="/login">ACCOUNT</a>
                <CustomMenu onClick={() => { setBurgerStatus(true) }}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWraper>
                    <CustomClose onClick={() => { setBurgerStatus(false) }}/>
                </CloseWraper>
                {cars && cars.map((car, index) => (

                    <li key={index}><a href="/">{car}</a> </li>

                ))}
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Used Inventory</a></li>
                <li><a href="">Trade-in</a></li>
                <li><a href="">Cybertruck</a></li>
                <li><a href="">Roadaster</a></li>
                <li><a href="">semi</a></li>
                <li><a href="">charging</a></li>
                <li><a href="">powerwall</a></li>
                <li><a href="">commercial Energy</a></li>
                <li><a href="">Utilities</a></li>
                <li><a href="">test drive</a></li>
                <li><a href="">find us</a></li>
                <li><a href="">support</a></li>
                <li><a href="">India</a></li>
            </BurgerNav>

            
        </Container>
    )
}

export default Header

const Container = styled.div`
      min-height:60px;
      position:fixed;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 20px;
      top:0;
      left:0;
      right:0;
      z-index:1
      
    
`

const Menu = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    flex:1;
    a {
       font-weight:600;
       text-transform:uppercase;
       padding:0px 10px;
       flex-Wrap:nowrap;
   }
   @media(max-width:768px){
       display:none;
       ${'' /* visibility: hidden; */}

   }    


`

const RightMenu = styled.div`
     display:flex;
     align-items:center;
     
    a{
       font-weight:600; 
       text-transform:uppercase;
       margin-right:10px;
    }

   
    
`
const CustomMenu = styled(MenuIcon)`
      cursor:pointer;
      right:0;
      
`

const BurgerNav = styled.div`
      overflow-y: scroll;
      position:fixed;
      text-transform: uppercase;
      &::-webkit-scrollbar {
        display: none;
      }
      top:0;
      bottom:0;
      right:0;
      background:white;
      width:500px;
      z-index:16;
      list-style:none;
      transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
      transition:transform 0.4s ;
      padding:75px 30px;
      li{
          padding:15px 0px;
          border-bottom:1px solid rgba(0,0,0,0.2);
        a{
            font-weight:600;
        }
      }
     
    li:hover{
            background-color:rgba(23,26,32,0.8);
            border-radius: 5px;
            opacity: 0.7;
            padding-left: 10px;
            box-shadow: rgb(112,112,112);
            a{
            color: #ffffff;
        }
    }
      
`
    
const CustomClose = styled(CloseIcon)`
      cursor:pointer;
`

const CloseWraper = styled.div`
     display:flex;
     justify-content:flex-end;
`