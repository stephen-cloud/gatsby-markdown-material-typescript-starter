import React from 'react'
import Helmet from 'react-helmet'
import PlainLayout from '../layout/PlainLayout'
import Contact from '../components/Contact'
import config from '../../data/SiteConfig'

function ContactPage() {
  return (
    <PlainLayout>
      <Helmet title={`Contact | ${config.siteTitle}`} />

      <Contact />
    </PlainLayout>
  )
}
export default ContactPage
