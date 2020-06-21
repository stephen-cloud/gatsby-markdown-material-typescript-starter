import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout/Layout'
import config from '../../data/SiteConfig'
import { Typography } from '@material-ui/core'

const NotFoundPage = () => (
  <Layout>
    <main>
      <Helmet title={`404: Not Found | ${config.siteTitle}`} />
      <Typography variant="h3">404 Not Found</Typography>
      <Typography variant="body1">You just hit a route that doesn&#39;t exist... the sadness.</Typography>
    </main>
  </Layout>
)

export default NotFoundPage
