import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../layout'
import Contact from '../components/Contact'
import config from '../../data/SiteConfig'

const ContactPage = () => (
  <Layout>
    <main>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Contact/>
    </main>
  </Layout>
)
export default ContactPage
