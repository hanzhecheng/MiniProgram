const path = require('path')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {},
  weapp: {},
  h5: {},
  webpack: {
    resolve: {
      alias: {
       
      }
    }
  }
}
