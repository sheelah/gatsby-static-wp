import React from 'react';
import Link from 'gatsby-link';

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return null;
  }
};

const BlogIndexPage = ({ data, pageContext }) => {
  const { group, index, first, last, pageCount, pathPrefix } = pageContext;
  const previousUrl =
    index - 1 === 1 ? pathPrefix : `${pathPrefix}/${(index - 1).toString()}`;
  const nextUrl = `${pathPrefix}/${(index + 1).toString()}`;

  return (
    <div>
      <h4>{pageCount} Posts</h4>

      {group.map(({ node }) => (
        <div key={node.id} className="blog-list">
          <div className="blog_date">{node.date}</div>
          <Link className="blog_url" to={`blog/${node.slug}`}>
            {node.title}
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
      <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </div>
    </div>
  );
};
export default BlogIndexPage;
