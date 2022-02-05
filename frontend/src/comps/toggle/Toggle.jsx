import React,{ useState} from 'react';
import { FaTimes} from 'react-icons/fa'
import { Close,ToggleWrapper, Logo, Profile, Button, Mode,On, List, Nav, Li, Title, Drop,Text,Hidden,Div} from './toggle.style'
import { FcPortraitMode,FcList, FcContacts,FcInfo, FcMenu,FcMinus, FcNightLandscape,FcLightAtTheEndOfTunnel, FcRight, FcExpand, FcCollapse,FcSettings,FcSupport} from 'react-icons/fc'
import Zoom from 'react-reveal'
function Toggle(props) {
  const [hide, setGetHide] = useState(false)
  const [service, setService] = useState(false)
  const [email, setEmail] = useState(false)
  const [phone, setPhone] = useState(false)
  return <div>
    <Close  onClick={() => props.getToggle(false)}>
      <FaTimes  size='30px' color='coral' />
      </Close>
      <ToggleWrapper>
                 <Logo>
                <h1>Webagent-dev</h1>
             </Logo>
             <Profile>
               <Button>Register</Button>
               <Button>Register</Button>

                               <Mode>
                    <FcLightAtTheEndOfTunnel  size='18px'/>
                    <On>light</On>
          </Mode>
             </Profile>
      </ToggleWrapper>
      <List>
  <Nav>
      <Li onClick={() =>setGetHide(!hide) } >
        <Div>
        <FcSettings size='25px' />
           <Title>Profile</Title>
                </Div>
         { hide ? <FcCollapse size='25px' /> :  <FcExpand size='25px' /> }
    
  </Li>
  { hide &&
     <Hidden>
       <Zoom left>
           <Drop>
                 <Text>LogOut</Text>
                   </Drop>
                     <Drop>
      <Text>Edit Profile</Text>
        </Drop>
            <Drop>
      <Text>Delete Profile</Text>
           </Drop>
           </Zoom>
           </Hidden>
           }
</Nav>
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
       <Zoom left>
           <Drop>
                 <Text>Dark Mode</Text>
                   </Drop>
                     <Drop>
      <Text>Light Mode</Text>
        </Drop>
         <Nav>
      <Li onClick={() =>setEmail(!email) }>
           <Title>My Email</Title>
              { email ? <FcCollapse  size='25px'/> :  <FcExpand  size='25px'/> }
  </Li>
{
  email &&
     <Hidden>
       <Zoom left>
           <Drop>
                 <Text>Webagent24@gmail.com</Text>
                   </Drop>
                   </Zoom>
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
       <Zoom left>
           <Drop>
                 <Text>09035765646</Text>
                   </Drop>
                   </Zoom>
           </Hidden>
}
</Nav>
      </Zoom>
           </Hidden>
           }
</Nav>
      <Li  onClick={() => props.getToggle(false)}>
          <Div>
              <FcPortraitMode size='25px'/>
           <Title>About Me</Title>
             </Div>
           <FcRight size='25px' />
  </Li>
        <Li  onClick={() => props.getToggle(false)}>
            <Div>
                  <FcList size='25px'/>
           <Title>My Projects</Title>
             </Div>
           <FcRight  size='25px'/>
  </Li>
        <Li  onClick={() => props.getToggle(false)}>
            <Div>
          < FcContacts  size='25px'/>
           <Title>Contact Me</Title>
             </Div>
           <FcRight size='25px' />
  </Li>
        <Li  onClick={() => props.getToggle(false)}>
            <Div>
                <FcInfo size='25px'/>
           <Title>My Resume</Title>
             </Div>
           <FcRight  size='25px'/>
  </Li>
      </List>
  </div>;
}

export default Toggle;
