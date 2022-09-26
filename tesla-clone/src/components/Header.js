 import React,{useState} from 'react'
 import styled from 'styled-components'
 import MenuIcon from '@mui/icons-material/Menu';
 import CloseIcon from '@mui/icons-material/Close';
 
 function Header() {

    const [sidebar,setSidebar]=useState(false);


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
            <CustomMenue onClick={()=>setSidebar(true)} />
        </RightMenu>

        <SideMenu show={sidebar}>
            <CloseWrapper>
                <CustomClose onClick={()=>setSidebar(false)} /> 
            </CloseWrapper>
           
            <li><a href="#">Model S</a></li>
            <li><a href="#">Model 3</a></li>
            <li><a href="#">Model x</a></li>
            <li><a href="#">Model y</a></li>
            <li><a href="#">Solar Roof</a></li>
            <li><a href="#">Solar Panels</a></li>
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-In</a></li>
            <li><a href="#">Test Drive</a></li>
            <li><a href="#">Insurance</a></li>
            <li><a href="#">Powerwall</a></li>
            <li><a href="#">Commercial Energy</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Find Us</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Investor Relations</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Account</a></li>

        </SideMenu>
    </Container>
   )
 }
 
 export default Header

 const Container = styled.div`
   min-height: 60px;
   position: fixed;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 20px;
   top:0;
   left:0;
   right:0;
   z-index:1

 
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
    @media(max-width:760px){
        display:none;
    }
 `

 const RightMenu= styled.div`
 display: flex;
 align-items: center;
 a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    margin-right:10px;
    flex-wrap: no-wrap;
}
 
 `

const CustomMenue =styled(MenuIcon)`
    cursor:pointer;


`
const SideMenu = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background:white;
    width:300px;
    z-index:16;
    list-style:none;
    padding:20px;
    display:flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' :'translateX(100%)'}; 
    // justify-content: flex-start;
    transition: transform 0.2s;
    li{
        padding: 15px 0;
        boarder-bottom:1px solid rgba(0,0,0,.2);
        a{
            font-weight: 600;
        }
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`

