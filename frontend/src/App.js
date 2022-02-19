import { AppContainer, GlobalStyle } from './app.style'
import { useState, useEffect, useContext  } from 'react'
import { Container, Land} from './one'
import { Routes, Route} from 'react-router-dom'
import { ThemeContext } from './context/ThemeContext'
function App() {
  const { state} = useContext(ThemeContext)
  const Mode = state.darkMode
  const [land, setLand] = useState(true)

  useEffect(() => {
    const close = setInterval(() => {
           setLand(false)
    }, 10000)
    return () => clearInterval(close)
  },[])
  return (
    <AppContainer>
      <GlobalStyle  mode={Mode}/>
          { land && <Land /> }
      <Routes>
   <Route path='/'  element={!land && <Container />} />
    </Routes>
    </AppContainer>
  );
}

export default App;
