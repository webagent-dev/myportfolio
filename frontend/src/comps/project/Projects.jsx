import React, { useContext, useState, useRef, useEffect } from 'react'
import { ProjectContainer, HeaderContainer, Header, Info, Wrapper, SelectContainer, SortHeader,
EnableContainer, Container,FormControl, Input, Label, MyComment, Textarea, Submit, FirstSort, SecondSort } from './project'
import { BtnList, ProjectList } from '../../one'
import { ThemeContext } from '../../context/ThemeContext'
import { FaTimes} from 'react-icons/fa'
import { Bounce } from 'react-reveal'
import FileBase64 from 'react-file-base64'
import { Formik, ErrorMessage  } from 'formik'
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
const experience = [
  { value: 'beginner', label: 'Beginner'},
   { value: 'intermediate', label: 'Intermediate'},
      { value: 'advance', label: 'Advance'},

]

const mainStyle = {
  select: styles => ({...styles,   fontSize: "20px",textTransform: "capitalize",backgroundColor:'white', 
  color: 'skyblue'}),
  control: styles => ({...styles, backgroundColor: 'whitesmoke',}),
  option: styles => ({...styles,  fontFamily: " 'Source Code Pro', monospace", textTransform: "uppercase",  fontSize: '15px',  padding: "12px  24px", cursor: "pointer"})
}

function Projects({comment}) {
  const {items, cat, setCat } = useContext(ThemeContext)
  const [enable, setEnable ] = useState(false)
  const [image, setImage ] = useState('')
  const [project, setProject ] = useState(port)
  const [tech, setTech ] = useState({})
  const getFocus = useRef()
    const   initialValues = {
           name: '',
          comment: ''
      }
      // const validateSchema = Yap.object({
      //     name: Yap.string().require('Pleaase Enter Your Full-Name'),
      //     comment: Yap.string().require('Pleaase Say Your Opinion')
      // })
      const validateSchema = values => {
        let error = {}
        if(!values.name){
          error.name = 'please enter your name'
        }
           if(!values.commit){
          error.name = 'please enter your opinion'
        }
        return error
      }
      const onSubmit = values  => {
          console.log('comment-date-value', values)
          // values && setEnable(false)
      }
  const filterProject = (cat) => {
  if(cat === 'all'){
      setProject(port)
      return;
  }
  const newProject = port.filter((item) => item.category === cat)
  setProject(newProject)
  console.log(newProject)
}
  const customTheme = theme => {
    console.assert(theme)
   return {
     ...theme,
     colors: {
       ...theme.colors,
       primary25: 'orange',
       primary: 'skyblue'
     }
   }
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
            <FirstSort>
            <SortHeader>Sort By Stack</SortHeader>
               <Select 
               options={options}
              theme={customTheme}
               isSearchable
                styles={mainStyle} 
                placeholder='Select Stack'
                onChange={setTech}
                        noOptionsMessage={() => 'please select a value'}
                  autoFocus
                  autoComplete
                />
                  </FirstSort>
                  <SecondSort>
                   <SortHeader>Sort By Experience </SortHeader>
               <Select 
               options={experience}
                  theme={customTheme}
               isSearchable
               styles={mainStyle} 
                placeholder='Select Experience'
                  onChange={setTech}
                  noOptionsMessage={() => 'please select a value'}
                  autoFocus
                  autoComplete
                />
                </SecondSort>
          </SelectContainer>
            <BtnList btn={filterBtn}  filter={filterProject} />
            <ProjectList project={project} comment={setEnable} focus={getFocus}/>
        </Wrapper>
        {
             enable && (
        <EnableContainer>
          <Formik 
          initialValues={initialValues}
          onSubmit={onSubmit}
          validateSchema={validateSchema}
          >
          <Container>
                  <Bounce>
            <Header>{'Comment  On This Project'}</Header>
              <FormControl>
              <Label htmlFor='name'>Full Name</Label>
              <Input  
              type='text'
              name='name'
              id='name'
              placeholder='Enter Your Full-Name'
              />
              <ErrorMessage  name='name'/>
                   <Label htmlFor='commit'>Your Opinion</Label>
              <Textarea 
              as='textarea'
              name='comment'
              id='commit'
                placeholder='Enter Your Commit'
              />
              <ErrorMessage name='comment' />
                   <Label>Your Image</Label>
              <FileBase64 
                multiple={false}
                onDone={({base64}) => setImage(base64)}
              />
              <Submit type='submit'> Commit </Submit>
         </FormControl>
            <MyComment>Thanks for your comment </MyComment>
                   </Bounce>
          </Container>
              </Formik>
        </EnableContainer>
           
      )   
        }
    </ProjectContainer>
    </Bounce>
  )
}

export default Projects