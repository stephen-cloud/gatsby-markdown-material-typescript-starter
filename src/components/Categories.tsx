import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import _ from 'lodash'
import { Theme, Button, makeStyles, createStyles, Link, Typography } from '@material-ui/core'

interface Category {
  fieldValue: string,
  totalCount: number
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    categoryButton: {
      margin: theme.spacing(0, 2, 0, 0),
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
          <Button size="small" variant="contained" className={classes.categoryButton} key={category.fieldValue}
            href={`/${_.kebabCase(category.fieldValue)}`} >
            {category.fieldValue} ({category.totalCount})
          </Button>
        ))
      }
    </div>
  )
}

export default Categories
