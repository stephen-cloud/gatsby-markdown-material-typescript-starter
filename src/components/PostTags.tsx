import React from 'react'
import _ from 'lodash'
import { Link, Theme, makeStyles, createStyles } from '@material-ui/core'

interface Tags {
  tags: string[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tagSpacing: {
      margin: theme.spacing(0, 3, 0, 0)
    }
  })
);

const PostTags = ({ tags }: Tags) => {
  const classes = useStyles()

  return (
    <div>
      {tags &&
        tags.map(tag => (
          <Link className={classes.tagSpacing} variant="body1" underline="none" key={tag} href={`/tags/${_.kebabCase(tag)}`}>{tag}</Link>
        ))}
    </div>
  )
}

export default PostTags
