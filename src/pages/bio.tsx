import React from 'react'
import Helmet from 'react-helmet'
import PlainLayout from '../layout/PlainLayout'
import Bio from '../components/Bio'
import config from '../../data/SiteConfig'

function BioPage() {
  return (
    <PlainLayout>
        <Helmet title={`Bio | ${config.siteTitle}`} />
        <Bio />
    </PlainLayout>
  )
}

export default BioPage
