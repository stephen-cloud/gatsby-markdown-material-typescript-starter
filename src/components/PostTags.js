import React from 'react'
import _ from 'lodash'
import { Link } from 'gatsby'
import { Button } from '@material-ui/core'

const PostTags = ({ tags }) => {
  return (
    <div>
      {tags &&
        tags.map(tag => (
          <Button><Link key={tag} to={`/tags/${_.kebabCase(tag)}`}>{tag}</Link></Button>
        ))}
    </div>
  )
}

export default PostTags
