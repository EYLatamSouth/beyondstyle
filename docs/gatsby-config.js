module.exports = {
  siteMetadata: {
    title: 'Beyondstyle',
    shortName: 'CompassUI',
    description: 'A Gatsby theme for creating Primer documentation sites'
  },
  pathPrefix: '/doctocat',
  __experimentalThemes: [
    {
      resolve: '@primer/gatsby-theme-doctocat',
      options: {
        repoRootPath: '..'
      }
    }
  ],
  plugins: ['gatsby-plugin-sass']
};
