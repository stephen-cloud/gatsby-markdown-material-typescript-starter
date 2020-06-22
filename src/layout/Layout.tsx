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
    // display: 'flex',
    // flexDirection: 'column',
    // minHeight: '100vh',
    // background: 'green'
  },
  main: {
    margin: theme.spacing(8, 8),
  },
  footer: {
    margin: theme.spacing(0, 3),
  }
}))

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
        <Categories />

        <div className={classes.main}>
          {container ? (
            <Container component="main">
              {children}
            </Container>
          ) : (
              <main>{children}</main>
            )}
        </div>
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
