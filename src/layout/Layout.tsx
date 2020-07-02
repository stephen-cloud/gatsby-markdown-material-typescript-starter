import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Categories from '../components/Categories'
import config from '../../data/SiteConfig'
import { Container, Theme, CssBaseline, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  body: {
    margin: theme.spacing(3, 8, 0, 8)
  },
  head: {
    margin: theme.spacing(0)
  },
}));

function Layout({ children, container = false, categories = true }) {
  const classes = useStyles()

  return (
    <>
      <CssBaseline />

      <Helmet title={config.siteDescription} defer={false} />
      <div className={classes.head}>
        <Header siteTitle={config.siteTitle}/>
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
    </>
  )
}

export default Layout
