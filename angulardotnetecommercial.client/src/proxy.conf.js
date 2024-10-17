const { env } = require('process');
//tránh vấn đề về CORS
const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7012';

const PROXY_CONFIG = [
  {
    context: [
          "/weatherforecast",
          "/api"
    ],
    target,
    secure: false
  }
]

module.exports = PROXY_CONFIG;
