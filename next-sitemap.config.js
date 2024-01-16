/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://issam-agoudjil.site',
    generateRobotsTxt: true, // (optional)
    outDir: "./out",
}
