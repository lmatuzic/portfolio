import { useState } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

//components
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

//animations
import { AnimatePresence } from 'framer-motion'

//css
import './stylesheets/application.scss'

function App() {
  const [navbarStatus, setNavbarStatus] = useState(false);
  const location = useLocation();

  return (
    <div className="App">
      <Navbar navbarStatus={navbarStatus} setNavbarStatus={setNavbarStatus} />

      <main className="content">
        <MobileNav navbarStatus={navbarStatus} setNavbarStatus={setNavbarStatus} />

        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
