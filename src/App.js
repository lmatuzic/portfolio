import { useState } from 'react'
import { Route } from 'react-router-dom'

//components
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

//css
import './stylesheets/application.scss'

function App() {
  const [navbarStatus, setNavbarStatus] = useState(false);

  return (
    <div className="App">
      <Navbar navbarStatus={navbarStatus} setNavbarStatus={setNavbarStatus} />

      <main className="content">
        <MobileNav navbarStatus={navbarStatus} setNavbarStatus={setNavbarStatus} />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </main>
    </div>
  );
}

export default App;
