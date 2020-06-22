import React from 'react'
import _ from 'lodash'
import { Button } from '@material-ui/core'

const PostTags = ({ tags }) => {
  return (
    <div>
      {tags &&
        tags.map(tag => (
          <Button color="primary" key={tag} href={`/tags/${_.kebabCase(tag)}`}>{tag}</Button>
        ))}
    </div>
  )
}

export default PostTags
