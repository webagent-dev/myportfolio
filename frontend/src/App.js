import { AppContainer, GlobalStyle } from './app.style'
import { useState, useEffect, useContext  } from 'react'
import { Container, Land, About, Project, SingleProject } from './one'
import { Routes, Route} from 'react-router-dom'
import { ThemeContext } from './context/ThemeContext'
function App() {
  const { state} = useContext(ThemeContext)
  const Mode = state.darkMode
  const [land, setLand] = useState(true)

  useEffect(() => {
    const close = setInterval(() => {
           setLand(false)
    }, 3000)
    return () => clearInterval(close)
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
    </Routes>
    </AppContainer>
  );
}

export default App;
