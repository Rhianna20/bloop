module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Becoming a Software Engineer",
  },
  plugins: ["gatsby-plugin-styled-components",
   "gatsby-plugin-gatsby-cloud",
   "gatsby-plugin-image",
   "gatsby-plugin-sharp",
   "gatsby-transformer-sharp",
   {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  "gatsby-plugin-mdx",
  ],
};
