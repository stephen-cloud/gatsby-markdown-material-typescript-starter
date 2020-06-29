import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout/Layout'
import About from '../components/About'
import config from '../../data/SiteConfig'

function AboutPage() {
  return (
    <Layout categories={false}>
      <Helmet title={`About | ${config.siteTitle}`} />

      <About />
    </Layout>
  )
}

export default AboutPage
