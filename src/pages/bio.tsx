import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout/Layout'
import Bio from '../components/Bio'
import config from '../../data/SiteConfig'

function BioPage() {
  return (
    <Layout categories={false}>
        <Helmet title={`Bio | ${config.siteTitle}`} />
        <Bio />
    </Layout>
  )
}

export default BioPage
