import React from 'react'
import _ from 'lodash'
import { Link, Theme, makeStyles, createStyles, Button } from '@material-ui/core'

interface Tags {
  tags: string[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tagSpacing: {
      margin: theme.spacing(0, 2, 0, 0)
    }
  })
);

const PostTags = ({ tags }: Tags) => {
  const classes = useStyles()

  return (
    <div>
      {tags &&
        tags.map(tag => (
          <Button className={classes.tagSpacing} size="small" variant="contained" key={tag} href={`/tags/${_.kebabCase(tag)}`}>{tag}</Button>
        ))}
    </div>
  )
}

export default PostTags
