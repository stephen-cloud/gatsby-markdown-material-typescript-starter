import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import _ from 'lodash'
import { Theme, Button, makeStyles, createStyles, Link } from '@material-ui/core'

interface Category {
  fieldValue: string,
  totalCount: number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    categoryLink: {
      margin: theme.spacing(0, 3, 0, 0)
    },
  }),
);

const Categories = () => {
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___categories) {
          fieldValue
          totalCount
        }
      }
    }
  `)

  return (
    <div>
      {
        data.allMarkdownRemark.group.map((category: Category) => (
          <Link underline="none" variant="body1" className={classes.categoryLink} key={category.fieldValue}
            href={`/${_.kebabCase(category.fieldValue)}`} >
            {category.fieldValue} ({category.totalCount})
          </Link>
        ))
      }
    </div>
  )
}

export default Categories
