import React from 'react'
import Helmet from 'react-helmet'
import PlainLayout from '../layout/PlainLayout'
import About from '../components/About'
import config from '../../data/SiteConfig'

function AboutPage() {
  return (
    <PlainLayout>
      <Helmet title={`About | ${config.siteTitle}`} />
      
      <About />
    </PlainLayout>
  )
}

export default AboutPage
