import React from 'react'
import _ from 'lodash'
import { Button, Link } from '@material-ui/core'

const PostTags = ({ tags }) => {
  return (
    <div>
      {tags &&
        tags.map(tag => (
          <Link underline="none" key={tag} href={`/tags/${_.kebabCase(tag)}`}>{tag}</Link>
        ))}
    </div>
  )
}

export default PostTags
