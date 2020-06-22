import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Categories from '../components/Categories'
import config from '../../data/SiteConfig'
import { Container, Theme, CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core'
import useLocalStorage from '../hooks/useLocalStorage'
import themes from '../themes'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(2)
  },
}))

// All this theme stuff belongs in Header
//
type ThemeMode = 'light' | 'dark'

function Layout({ children, container = false }) {
  const classes = useStyles()
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={themes[theme as ThemeMode]}>
      <CssBaseline />
      <div className={classes.root}>
        <Helmet title={config.siteDescription} defer={false} />
        <Header siteTitle={config.siteTitle} onToggleTheme={toggleTheme} theme={theme} />

        {container ? (
          <Container component="main" maxWidth="md" className={classes.main}>
            {children}
          </Container>
        ) : (
            <main>{children}</main>
          )}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
