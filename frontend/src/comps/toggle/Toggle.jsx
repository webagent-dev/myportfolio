import React,{ useState, useContext } from 'react';
import { FaTimes} from 'react-icons/fa'
import { Close,ToggleWrapper, Logo, Profile, Button, Mode,On, List, Nav, Li, Title, Drop,Text,Hidden,Div} from './toggle.style'
import { FcPortraitMode,FcList, FcContacts,FcInfo, FcRight, FcExpand, FcCollapse,FcSettings,FcSupport} from 'react-icons/fc'
import {Bounce } from 'react-reveal'
import { ThemeContext } from '../../context/ThemeContext'
import { NavLink } from 'react-router-dom'
function Toggle(props) {
  const [hide, setGetHide] = useState(false)
  const [service, setService] = useState(false)
  const [email, setEmail] = useState(false)
  const [phone, setPhone] = useState(false)
  const { dispatch, state } = useContext(ThemeContext) 
  const changeMode = state.darkMode
  const handleDrop = () => {
    dispatch({type: 'Toggle'})
    props.getToggle(false)
  }
  return(
  <Bounce>
   <div>
    <Close  onClick={() => props.getToggle(false)}>
      <FaTimes  size='30px' color='coral' />
      </Close>
      <ToggleWrapper mode={changeMode}>
                 <Logo>
                   <NavLink to='/'>
                <h1>Webagent-dev</h1>
                </NavLink>
             </Logo>
             <Profile>
               {/* <Button dark={changeMode} >Register</Button>
               <Button dark={changeMode} >Login</Button> */}
             </Profile>
      </ToggleWrapper>
      <List mode={changeMode}>
  {/* <Nav>
      <Li onClick={() =>setGetHide(!hide) } >
         { hide ? <FcCollapse size='25px' /> :  <FcExpand size='25px' /> }
    
  </Li>
</Nav> */}
  <Nav>
      <Li onClick={() =>setService(!service) }>
        <Div>
           <FcSupport size='25px' />
           <Title>Service</Title>
           </Div>
        { service ? <FcCollapse size='25px' />   : < FcExpand size='25px' />}
  </Li>
{
  service &&
     <Hidden>
       {/* <Zoom left> */}
           <Drop onClick={() => handleDrop()}>
                 <Text>Toggle{ !changeMode ? ' Dark' : ' Light' } Mode</Text>
                   </Drop>
         <Nav>
      <Li onClick={() =>setEmail(!email) }>
           <Title>My Email</Title>
              { email ? <FcCollapse  size='25px'/> :  <FcExpand  size='25px'/> }
  </Li>
{
  email &&
     <Hidden>
       {/* <Zoom left> */}
           <Drop>
                 <Text>Webagent24@gmail.com</Text>
                   </Drop>
                   {/* </Zoom> */}
           </Hidden>
}
</Nav>
         <Nav>
      <Li onClick={() =>setPhone(!phone) }>
           <Title>Phone Num</Title>
              { phone ? <FcCollapse size='25px' /> :  <FcExpand  size='25px'/> }
  </Li>
  { phone && 
     <Hidden>
       {/* <Zoom left> */}
           <Drop>
                 <Text>09035765646</Text>
                   </Drop>
                   {/* </Zoom> */}
           </Hidden>
}
</Nav>
      {/* // </Zoom> */}
           </Hidden>
           }
</Nav>
   <NavLink to='/about_me'>
      <Li  onClick={() => props.getToggle(false)}>
          <Div>
              <FcPortraitMode size='25px'/>
           <Title>About Me</Title>
             </Div>
           <FcRight size='25px' />
  </Li>
  </NavLink>
     <NavLink to='/my_project'>
        <Li  onClick={() => props.getToggle(false)}>
            <Div>
                  <FcList size='25px'/>
           <Title>My Projects</Title>
             </Div>
           <FcRight  size='25px'/>
  </Li>
  </NavLink >
     <NavLink to='/my_contact'>
        <Li  onClick={() => props.getToggle(false)}>
            <Div>
          < FcContacts  size='25px'/>
           <Title>Contact Me</Title>
             </Div>
           <FcRight size='25px' />
  </Li>
  </NavLink>
     <NavLink to='/my_resume'>
        <Li  onClick={() => props.getToggle(false)}>
            <Div>
                <FcInfo size='25px'/>
           <Title>My Resume</Title>
             </Div>
           <FcRight  size='25px'/>
  </Li>
  </NavLink>
      </List>
  </div>
  </Bounce>
  )
}

export default Toggle;
