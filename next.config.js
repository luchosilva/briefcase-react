/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Optional: Set the build output directory
  output: 'export',

  // Optional: Set the base path for the project
  basePath: '/briefcase',

  // Optional: Set the asset prefix for the project
  reactStrictMode: true,

  images: { unoptimized: true },

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
module.exports = nextConfig