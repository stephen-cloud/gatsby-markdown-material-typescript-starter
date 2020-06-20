import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import Bio from '../components/Bio'
import config from '../../data/SiteConfig'

function BioPage() {
  return (
    <Layout>
      <main>
        <Helmet title={`Bio | ${config.siteTitle}`} />
        <Bio />
      </main>
    </Layout>
  )
}

export default BioPage
