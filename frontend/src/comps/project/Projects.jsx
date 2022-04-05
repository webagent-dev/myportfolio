import React, { useContext, useState, useRef, useEffect } from 'react'
import { ProjectContainer, HeaderContainer, Header, Info, Wrapper, SelectContainer, SortHeader,
EnableContainer, Container,Form, Input, Label, MyComment, Textarea, Submit } from './project'
import { BtnList, ProjectList } from '../../one'
import { ThemeContext } from '../../context/ThemeContext'
import { FaTimes} from 'react-icons/fa'
import { Bounce } from 'react-reveal'
import FileBase64 from 'react-file-base64'
import { useFormik } from 'formik'
import { port } from '../../data'
import Select from 'react-select'
const filterBtn = ['all', ...new Set(port.map((item) => item.category))]
const options = [
  { value: 'html&css', label: 'Html&Css' },
  { value: 'javascript', label: 'Javascript' },
  { value: 'reactjs', label: 'Reactjs' },
    { value: 'jamstack', label: 'Jam-Stack' },
      { value: 'nodejs', label: 'Nodejs' },
        { value: 'nextjs', label: 'Nextjs' }
]

const mainStyle = {
  select: styles => ({...styles,   fontSize: "20px",textTransform: "uppercase",backgroundColor:'white', 
  color: 'skyblue'}),
  control: styles => ({...styles, backgroundColor: 'skyblue',}),
  option: styles => ({...styles,  fontFamily: " 'Source Code Pro', monospace", textTransform: "uppercase",  fontSize: '15px',  padding: "12px  24px", cursor: "pointer"})
}

function Projects({comment}) {
  const {items, cat, setCat } = useContext(ThemeContext)
  const [enable, setEnable ] = useState(false)
  const [image, setImage ] = useState('')
  const [project, setProject ] = useState(port)
  const getFocus = useRef()
  const formik = useFormik({
      initialValues:{
        name: '',
        comment: ''
      }
  })
  const filterProject = (cat) => {
  if(cat === 'all'){
      setProject(port)
      return;
  }
  const newProject = port.filter((item) => item.category === cat)
  setProject(newProject)
  console.log(newProject)
}
  return (
    <Bounce>
    <ProjectContainer>
        <HeaderContainer>
            <Header> Prudly Created & Inspire. By Webagent-dev</Header>
            <Info>As a developer I take pride in what I do,There is a fair amount of ego involved in what I do, <br />
            The solutions I can devise are things to be proud of, 
            Cause it takes insight and keen knowledge to accomplish what I do </Info>
        </HeaderContainer>
        <Wrapper>
          <SelectContainer>
            <SortHeader>Sort Tech</SortHeader>
               <Select 
               options={options}
              //  style={style.Select}
                styles={mainStyle} 
                placeholder='Select Stack'
                />
          </SelectContainer>
            <BtnList btn={filterBtn}  filter={filterProject} />
            <ProjectList project={project} comment={setEnable} focus={getFocus}/>
        </Wrapper>
        {
             enable && (
        <EnableContainer onClick={() => setEnable(false)}>
          <Container>
                  <Bounce>
            <Header>{'Comment  On This Project'}</Header>
            <Form>
              <Label>Full Name</Label>
              <Input  ref={getFocus} />
                   <Label>Your Opinion</Label>
              <Textarea />
                   <Label>Your Image</Label>
              <FileBase64 
                multiple={false}
                onDone={({base64}) => setImage(base64)}
              />
              <Submit type='submit'> Commit </Submit>
            </Form>
            <MyComment>Thanks for your comment </MyComment>
                   </Bounce>
          </Container>
        </EnableContainer>
           
      )   
        }
    </ProjectContainer>
    </Bounce>
  )
}

export default Projects