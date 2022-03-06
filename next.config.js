/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    name: 'Iván Arjona',
    fullName: 'Iván Arjona Alonso',
    email: 'ivan@iarjona.com',
    github: 'https://github.com/IvanArjona',
    linkedin: 'https://www.linkedin.com/in/ivan-arjona/',
    locales: 'es,en'
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  images: {
    loader: 'custom'
  }
}
