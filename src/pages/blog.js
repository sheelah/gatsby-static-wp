import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';

export default ({ data }) => {
  return (
    <>
      <h1>Blog</h1>
      {data.allWordpressPost.edges.map(({ node }) => (
        <article key={node.id}>
          <p>
            <Link to={`blog/${node.slug}`}>{node.title}</Link>
          </p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </article>
      ))}
    </>
  );
};

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
  }
`;
