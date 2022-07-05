import { AppContainer } from './App.style'
import Header from './ui/components/Header'
import SubMenu from './ui/components/SubMenu'
import Home from './ui/pages/Home/Home'

function App() {
  return (
    <AppContainer>
      <Header />
      <SubMenu />
      <Home />
    </AppContainer>
  )
}

export default App
