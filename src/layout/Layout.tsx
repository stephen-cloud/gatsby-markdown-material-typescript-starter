import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Categories from '../components/Categories'
import config from '../../data/SiteConfig'
import { Container, Theme, CssBaseline, makeStyles, ThemeProvider, Grid, Divider } from '@material-ui/core'
import useLocalStorage from '../hooks/useLocalStorage'
import themes from '../themes'

const useStyles = makeStyles((theme: Theme) => ({
  body: {
    margin: theme.spacing(3, 8, 0, 8)
  },
  head: {
    margin: theme.spacing(0)
  },
}));

type ThemeMode = 'light' | 'dark'

function Layout({ children, container = false, categories = true }) {
  const classes = useStyles()
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeProvider theme={themes[theme as ThemeMode]}>
      <CssBaseline />

      <Helmet title={config.siteDescription} defer={false} />
      <div className={classes.head}>
        <Header siteTitle={config.siteTitle} onToggleTheme={toggleTheme} theme={theme} />
      </div>

      <div className={classes.body}>
        <Grid container spacing={5}>
          {categories ? (
            <Grid item xs={12}>
              <Categories />
            </Grid>
          ) : (
              <div />
            )}
          <Grid item xs={12}>
            {container ? (
              <Container component="main">
                {children}
              </Container>
            ) : (
                <main>{children}</main>
              )}
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider >
  )
}

export default Layout
