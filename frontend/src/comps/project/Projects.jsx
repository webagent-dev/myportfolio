import React, { useContext, useState } from 'react'
import { ProjectContainer, HeaderContainer, Header, Info, Wrapper, SelectContainer, SortHeader,} from './project'
import { BtnList, ProjectList } from '../../one'
import { ThemeContext } from '../../context/ThemeContext'
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
  option: styles => ({...styles,  fontFamily: " 'Source Code Pro', monospace", textTransform: "uppercase",  fontSize: '15px',  padding: "12px  24px"})
}

function Projects() {
  const {items, cat, setCat } = useContext(ThemeContext)
  const [project, setProject ] = useState(port)
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
            <ProjectList project={project}/>
        </Wrapper>
    </ProjectContainer>
  )
}

export default Projects