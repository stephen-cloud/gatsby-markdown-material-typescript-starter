import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import _ from 'lodash'
import { Theme, Button, makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2, 2)
    },
  }),
);


const Categories = (props: any) => {
  const classes = useStyles()

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
    <div className={classes.root}>
      {data.allMarkdownRemark.group.map((category: any) => (
        <Button color="primary" key={category.fieldValue}
          href={`/${_.kebabCase(category.fieldValue)}`}
        >
          {category.fieldValue} / {category.totalCount}
        </Button>
      ))}
    </div>
  )
}

export default Categories
