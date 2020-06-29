import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout/Layout'
import Contact from '../components/Contact'
import config from '../../data/SiteConfig'

function ContactPage() {
  return (
    <Layout categories={false}>
      <Helmet title={`Contact | ${config.siteTitle}`} />

      <Contact />
    </Layout>
  )
}
export default ContactPage
