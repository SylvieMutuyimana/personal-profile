const { createSecureHeaders } = require('next-secure-headers');

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          contentSecurityPolicy: {
            directives: {
              defaultSrc: ["'self'"],
              styleSrc: ["'self'", 'https://cdnjs.cloudflare.com'],
              scriptSrc: ["'self'", "'unsafe-inline'"],
              imgSrc: ["'self'", 'data:'],
            },
          },
          frameGuard: 'deny', // equivalent to X-Frame-Options: DENY
          xssProtection: '1; mode=block', // equivalent to X-XSS-Protection: 1; mode=block
          nosniff: 'nosniff', // equivalent to X-Content-Type-Options: nosniff
          referrerPolicy: 'same-origin', // equivalent to Referrer-Policy: same-origin
        }),
      },
    ];
  },
};
