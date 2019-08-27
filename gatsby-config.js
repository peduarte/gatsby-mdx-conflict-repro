module.exports = {
  siteMetadata: {
    title: `My Ambitious Project`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`
      }
    },
    `gatsby-plugin-mdx`
  ]
};
