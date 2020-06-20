require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `Provisional`,
    siteTitleAlt: `Provisional - A Podcast`,
    siteHeadline: `Be water not stone`,
    siteUrl: `https://provisional.netlify.app`,
    siteDescription: `A podcast about challenging assumptions`,
    author: `@itsprovisional`
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {
        basePath: '/',
        blogPath: '/episodes',
        postsPath: 'content/episodes',
        formatString: 'YYYY-MM-DD',
        navigation: [
          {
            title: `Episodes`,
            slug: `/episodes`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
          {
            name: `Twitter`,
            url: `https://twitter.com/itsprovisional`,
          },
          {
            name: `Instagram`,
            url: `https://www.instagram.com/Provisional.Podcast`,
          },
        ],
      },
    },
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: 'x8pzsd5o',
    //     dataset: 'development',
    //     token: process.env.MY_SANITY_TOKEN,
    //     // If the Sanity GraphQL API was deployed using `--tag <name>`,
    //     // use `graphqlTag` to specify the tag name. Defaults to `default`.
    //     graphqlTag: 'default',
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Provisional - a podcast`,
        short_name: `Provisional`,
        description: `Typography driven, feature-rich blogging theme with minimal aesthetics. Includes tags/categories support and extensive features for code blocks such as live preview, line numbers, and code highlighting.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
