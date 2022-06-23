module.exports = {
  reactStrictMode: true,
  env: {
    dev: 'dev',
    NEXT_PUBLIC_URLLOC: 'http://localhost:3001',
    NEXT_PUBLIC_URLPUB: 'https://api-galeri.kemlu.go.id',
    NEXT_PUBLIC_ANALYTIC: 'https://googletagmanager.com',
    GOOGLE_ANALYTICS_ID: 'G-K61FQPQP7N',
    TOKEN_KEY: '4rs1pd1g1t4l',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  }
}
