import { Route } from "react-router-dom"

//components
import Navbar from './components/Navbar'

//pages
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

//css
import './stylesheets/application.scss'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/about" component={About} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </div>
  );
}

export default App;
