import { Route, Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import AboutPage from "./components/AboutPage"
import BlogPage from "./components/BlogPage"
import Main from "./components/Main"
import MySkillsPage from "./components/MySkillsPage"
import { DarkTheme, lightTheme } from "./components/Thems"
import WorkPage from "./components/WorkPage"
import GlobalStyle from "./globalStyle"

function App() {
  return <>

  <GlobalStyle/>

  <ThemeProvider theme={lightTheme}>

  <Switch>

    <Route exact path="/" component={Main}/>
    <Route exact path="/about" component={AboutPage}/>
    <Route exact path="/blog" component={BlogPage}/>
    <Route exact path="/skills" component={MySkillsPage}/>
    <Route exact path="/work" component={WorkPage}/>

  </Switch>
  </ThemeProvider>
    </>
    
}

export default App

