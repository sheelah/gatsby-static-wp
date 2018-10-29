require('dotenv-safe').config();

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: process.env.WP_BASE_URL,
        protocol: 'https',
        hostingWPCOM: false,
        useACF: false,
        verboseOutput: true,
        // Set how many pages are retrieved per API request.
        perPage: 100,
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          '/*/*/categories',
          '/*/*/media',
          '/*/*/pages',
          '/*/*/portfolio',
          '/*/*/posts',
          '/*/*/tags',
          '/*/*/taxonomies',
          '/*/*/users',
        ],
        // Blacklisted routes using glob patterns
        excludedRoutes: [],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities;
        },
      },
    },
  ],
};
