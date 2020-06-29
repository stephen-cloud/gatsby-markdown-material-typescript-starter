import React from 'react'
import config from '../../data/SiteConfig'
import { Typography } from '@material-ui/core'

function Footer() {
  return (
    <footer>
      <Typography variant="caption" >{config.copyright}</Typography>
    </footer>
  )
}

export default Footer
