module.exports = {
  siteMetadata: {
    title: "Alex Kennedy",
    author: "Alex Kennedy",
    description: "My personal site. "
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'alex-kennedy',
        short_name: 'alex',
        start_url: '/me/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // 'gatsby-plugin-offline'
  ],
  pathPrefix: `/me`
}
