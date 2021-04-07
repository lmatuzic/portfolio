import { useTheme, useThemeUpdate } from '../ThemeContext'

const FunctionComponent = () => {
  const lightTheme = useTheme()
  const toggleTheme = useThemeUpdate()
  const themeStyles = {
    backgroundColor: lightTheme ? '#262525' : '#FFFFFF',
    color: lightTheme ? '#FFFFFF' :  '#262525',
    padding: '2rem',
    margin: '2rem'
  }

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <div style={themeStyles} className={`${lightTheme}`} >
        Toggle Theme
      </div>
    </>
  )
}

export default FunctionComponent
  