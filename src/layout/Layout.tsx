import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Categories from '../components/Categories'
import config from '../../data/SiteConfig'
import { Theme, makeStyles, createStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(5, 13)
    },
  }),
);

function Layout({ children }) {
  const classes = useStyles()

  return (
    <>
      <main>
        <Header />
        <Categories />

        <div className={classes.root}>
          <Helmet title={config.siteDescription} defer={false} />
          {children}
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Layout
