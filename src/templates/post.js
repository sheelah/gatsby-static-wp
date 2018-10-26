import React, { Component } from 'react';
import { graphql } from 'gatsby';

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost;
    return (
      <>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
    }
  }
`;
