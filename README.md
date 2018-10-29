# gatsby-static-wp

A prototype for a Gatsby-based static site serving up content from a WordPress site.

## Development

To get the dev server started up:

```sh
npm i
WP_BASE_URL={your WordPress site} gatsby develop
```

## Deployment

To generate the static site for deployment:

```sh
WP_BASE_URL={your url} gatsby build
```

The built site will be available in `public/`.
