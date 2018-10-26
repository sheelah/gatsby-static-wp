import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
  return (
    <div>
      <h1>Blog</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
