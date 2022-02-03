import { AppContainer, GlobalStyle } from './app.style'
import { useState, useEffect  } from 'react'
import { Container, Land} from './one'
import { Routes, Route} from 'react-router-dom'
function App() {
  const [land, setLand] = useState(true)

  useEffect(() => {
    const close = setInterval(() => {
           setLand(false)
    }, 10000)
    return () => clearInterval(close)
  },[])
  return (
    <AppContainer>
      <GlobalStyle />
          { land && <Land /> }
      <Routes>
   <Route path='/'  element={!land && <Container />} />
    </Routes>
    </AppContainer>
  );
}

export default App;
