![Gatsby Publish](https://github.com/stephen-cloud/gatsby-markdown-material-typescript-starter/workflows/Gatsby%20Publish/badge.svg)

<div align="center">
    <img src="static/logos/logo-1024.png" alt="Logo" width='200px' height='200px'/>
    <p style="font-size: 64px;">TypeScript<p>
    <img src="https://material-ui.com/static/logo_raw.svg" alt="Logo" width='200px' height='200px'/>
</div>

# Gatsby Markdown Material TypeScript Blog Starter

A markdown blog starter with all you need features to start markdown blog using React Material UI and TypeScript.

NOTE: This project is a developed version of [gatsby-markdown-blog-starter](https://www.gatsbyjs.org/starters/ammarjabakji/gatsby-markdown-blog-starter/) which is itself a development of [Gatsby Advanced Starter](https://github.com/Vagr9K/gatsby-advanced-starter).

It aims to provide a minimal base for building advanced Gatsby powered Markdown blogs using Material UI and TypeScript.

## How can I use this?

If you are a newcomer to Gatsby who's interested in the implementations of most needed features, this is a great place to start. Especially if you're either a dab hand at Material UI and/or TypeScript.

If you are interested in a foundation for building ultra-fast websites, you can use this project as a "minimal" starter using the tech above, including if you want to take a loo at TypeScript.

[Demo website.](http://gatsby-markdown-material-typescript-starter.stephen.cloud/)

## Features

- Gatsby v2 support
- TypeScript and TSX soup-to-nuts
- Blazing fast loading times thanks to pre-rendered HTML and automatic chunk loading of JS files
- Material UI
- Responsive
- Material theme via configuration
- GitHub actions for publishing to GitHub pages
- Separate components for everything
- High configurability:
  - About
  - Bio section
  - User social profiles
  - Copyright information
- Posts in Markdown
  - Code syntax highlighting
  - Embed YouTube videos
  - Embed Tweets
- Typography
- Prism syntax highlighter
- Tags
  - Separate page for posts under each tag
- Categories
  - Separate page for posts under each category
- Google Analytics support
- NPM scripts for GitHub Pages deployment
- Htaccess ready deployment to apache server
- Social features
  - Twitter tweet button
  - Facebook share/share count
  - Reddit share/share count
  - Google+ share button
  - LinkedIn share button
  - Telegram share button
- SEO
  - Sitemap generation
  - robots.txt
  - General description tags
  - Schema.org JSONLD (Google Rich Snippets)
  - OpenGraph Tags (Facebook/Google+/Pinterest)
  - Twitter Tags (Twitter Cards)
- RSS feeds
- Loading progress for slow networks
- Web App Manifest support (PWA)
- Offline support
- `/static/` and content folders are available to use with `gatsby-image` out of the box
- CSS Modules / sass support
- Development tools
  - ESLint for linting
  - Prettier for code style
  - Remark-Lint for linting Markdown
  - write-good for linting English prose
  - gh-pages for deploying to GitHub pages
  - CodeClimate configuration file and badge

## Getting Started

Install this starter (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed and updated) by running from your CLI:

```sh
gatsby new YourProjectName https://github.com/stephen-cloud/gatsby-markdown-material-typescript-starter
npm run develop # or gatsby develop
```

Or you can fork the project, make your changes there and merge new features when needed.

Alternatively:

```sh
git clone https://github.com/stephen-cloud/gatsby-markdown-material-typescript-starter YourProjectName # Clone the project
cd YourProjectname
rm -rf .git # So you can have your own changes stored in VCS.
npm install # or yarn install
npm run develop # or gatsby develop
```

## Configuration
****
Edit the export object in `data/SiteConfig`:

```js
const config = {
  siteTitle: 'Gatsby Markdown Material TypeScript Blog Starter', // Site title.
  siteTitleShort: 'Gatsby Markdown Material TypeScript Blog Starter', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Gatsby Markdown Material TypeScript Blog Starter', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024.png', // Logo used for SEO and manifest.
  siteUrl: 'http://gatsby-markdown-material-typescript-starter.stephen.cloud', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription:
    'A Gatsby Material Markdown TypeScript Blog stater with Advanced design in mind.', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteFBAppID: '1825356251115265', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-161211056-1', // GA tracking ID.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'DD/MM/YYYY', // Date format for display.
  userName: 'Jone Due', // Username to display in the author segment.
  userEmail: 'youremail@gmail.com', // Email used for RSS feed's author segment
  userTwitter: 'gatsbyjs', // Optionally renders "Follow Me" in the Bio segment.
  userGitHub: 'gatsbyjs', // Optionally renders "Follow Me" in the Bio segment.
  userLocation: 'North Pole, Earth', // User location to display in the author segment.
  userAvatar: 'http://images.stephen.cloud/stephen-avatar.png', // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  copyright: 'Copyright © 2020. All rights reserved.', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: 'red' // Used for setting manifest background color.
};
```

You can also optionally set `pathPrefix`:

```js
module.exports = {
  // Note: it must *not* have a trailing slash.
  pathPrefix: "/gatsby-markdown-blog-starter" // Prefixes all links. For cases when deployed to example.github.io/gatsby-markdown-blog-starter/.
};
```

WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!
