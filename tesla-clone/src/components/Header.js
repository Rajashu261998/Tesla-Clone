 import React from 'react'
 import styled from 'styled-components'
 import MenuIcon from '@mui/icons-material/Menu';
 
 function Header() {
   return (
     <Container>
        <a>
            <img src='/TeslaImage/logo.svg' alt='' />
        </a>
        <Menu>
            <p><a href='#'>Moddel S</a></p>
            <p><a href='#'>Moddel 3</a></p>
            <p><a href='#'>Moddel x</a></p>
            <p><a href='#'>Moddel y</a></p>
            <p><a href='#'>Solar Roof</a></p>
            <p><a href='#'>Soloar Panels</a></p>
        </Menu>
        <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Account</a>
            <a href="#">Menu</a>
        </RightMenu>
    </Container>
   )
 }
 
 export default Header

 const Container = styled.div`
   min-height: 60px;
   popsition: fixed;
   display: flex;
   align-items: center;
   padding: 0 20px;
   top:0;
   left:0;
   right:0;

 
 `

 const Menu =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    a{
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: no-wrap;
    }
 `

 const RightMenu= styled.div`
 a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    margin-right:10px;
    flex-wrap: no-wrap;
}
 
 `