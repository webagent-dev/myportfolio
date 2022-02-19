import React, { useState, useContext } from 'react';
import { Toggle } from '../../one'
import { ThemeContext } from '../../context/ThemeContext'
import { HeaderContainer, HeaderWrapper,Logo, Nav, Li,User, Button,Toggles, Text,Mode,On,ToggleContainer} from './header.style'
import { FcPortraitMode,FcList, FcContacts,FcInfo, FcMenu,FcMinus, FcNightLandscape,FcLightAtTheEndOfTunnel} from 'react-icons/fc'
import Flip from 'react-reveal'
function Header() {
    const { dispatch, state } = useContext(ThemeContext)
    const [toggle, setToggle ] = useState(false)
    const ChangeMode = state.darkMode
  return (
      <>
      <HeaderContainer mode={ChangeMode}>
          <Flip left>
          <HeaderWrapper>
          <Logo>
                <h1>Webagent-dev</h1>
          </Logo>
          <Nav>
              <Li>
                  <FcPortraitMode size='25px'/>
                  <Text>About Me</Text>
              </Li>
              <Li>
                    <FcList size='25px'/>
                  <Text> My Projects</Text>
                 </Li>
              <Li>
                       <FcContacts size='25px'/>
                  <Text> Contact Me</Text>
              </Li>
              <Li>
                        <FcInfo size='25px'/>
                  <Text>My Resume</Text>
              </Li>
          </Nav>
          <User>
              <Button>Register</Button>
              <Button>Login</Button>
    
        {
            ChangeMode 
            ?   <Mode onClick={() => dispatch({type: "Toggle"})}>
                    <FcNightLandscape size='18px'/>
                    <On>Dark</On>
          </Mode>
          :   <Mode onClick={() => dispatch({type: "Toggle"})}>
                    <FcLightAtTheEndOfTunnel size='18px'/>
                    <On>Light</On>
          </Mode>
        }
          </User>
          <Toggles>
                <FcMenu  size='30px' onClick={() => setToggle(true)}/>
          </Toggles>
</HeaderWrapper>
</Flip>
<div className="svg__wrapper">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>
      </HeaderContainer>
      {toggle && (
          <ToggleContainer>
              <Toggle getToggle={setToggle} />
          </ToggleContainer>
      )}
      </>
  )
}

export default Header;
