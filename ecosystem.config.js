module.exports = {
  apps: [
    {
      name: 'app-fork',
      script: './dist/index.js',
      watch: true,
      autorestart: true,
      args: '--mode fork --run pm2 --port 8081',
    },
    {
      name: 'app-cluster',
      script: './dist/index.js',
      watch: true,
      autorestart: true,
      instances: 4,
      args: '--mode cluster --run pm2 --port 8082',
    },
  ],
};
