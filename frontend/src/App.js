import { AppContainer, GlobalStyle } from './app.style'
import { useState, useEffect, useContext  } from 'react'
import { Container, Land, About, Project, SingleProject, Contact, Resume, Header } from './one'
import { Routes, Route} from 'react-router-dom'
import { ThemeContext } from './context/ThemeContext'
function App() {
  const { state} = useContext(ThemeContext)
  const Mode = state.darkMode
  const [land, setLand] = useState(true)

  useEffect(() => {
    const close = setTimeout(() => {
           setLand(false)
    }, 5000)
    return () => clearTimeout(close)
  },[])
  return (
    <AppContainer>
      <GlobalStyle  mode={Mode}/>
          { land && <Land /> }
      <Routes>
   <Route path='/'  element={!land && <Container />} />
   <Route path='/about_me' element={ !land && <About />} />
      <Route path='/my_project' element={ !land && <Project />} />
      <Route path='/get_project/:id' element={ !land && <SingleProject />} />
         <Route path='/my_contact' element={ !land && <Contact />} />
              <Route path='/my_resume' element={ !land && <Resume />} />

    </Routes>
    </AppContainer>
  );
}

export default App;
