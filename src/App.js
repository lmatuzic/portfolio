import { useState } from 'react'

//components
import Navbar from './components/Navbar'
import MobileNav from './components/MobileNav'
import Routes from './components/Routes'

//css
import './stylesheets/application.scss'

function App() {
  const [theme, setTheme] = useState("dark");
  const [navbarStatus, setNavbarStatus] = useState(false);

  return (
    <div className={`App ${theme} `} theme={theme}>
      <Navbar 
        navbarStatus={navbarStatus} 
        setNavbarStatus={setNavbarStatus} 
        theme={theme}
        setTheme={setTheme}
      />

      <main className="content">
        <MobileNav navbarStatus={navbarStatus} setNavbarStatus={setNavbarStatus} />
        <Routes />
      </main>
    </div>
  );
}

export default App;