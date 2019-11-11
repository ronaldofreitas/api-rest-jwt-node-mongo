// pm2
module.exports = {
  apps: [
    {
      name: 'Projeto',
      script: './index.js',
      instances: 0,
      exec_mode: 'cluster',
      watch: true,
      env: {
        NODE_ENV: 'production',
        PORT: '5555'
      }
    }
  ]
};