/** @type {import('next').NextConfig} */

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
	defaultShowCopyCode: true,
	staticImage: false
})
 
module.exports = withNextra({
	/** Other next.js config */
	reactStrictMode: true,
})
