/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const createPaginatedPages = require('gatsby-paginate');
const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(
      `
        {
          allWordpressPost {
            edges {
              node {
                id
                slug
                status
                template
                format
                excerpt
                title
              }
            }
          }
        }
      `
    ).then(result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }
      createPaginatedPages({
        edges: result.data.allWordpressPost.edges,
        createPage: createPage,
        pageTemplate: 'src/templates/blog-index.js',
        pageLength: 5,
        pathPrefix: 'blog',
        buildPath: (index, pathPrefix) =>
          index > 1 ? `${pathPrefix}/${index}` : `/${pathPrefix}`, // This is optional and this is the default
      });
      const postTemplate = path.resolve('./src/templates/post.js');
      _.each(result.data.allWordpressPost.edges, edge => {
        createPage({
          path: `blog/${edge.node.slug}`,
          component: slash(postTemplate),
          context: {
            id: edge.node.id,
          },
        });
      });
      resolve();
    });
  });
};
