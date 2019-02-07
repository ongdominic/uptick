module.exports = {
  pathPrefix: "/uptick"
};

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat']
        }
      }
    }
  ]
}