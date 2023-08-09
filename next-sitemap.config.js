/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://library.packagingschool.com',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
