const fs = require('fs');

const NODE_ENV = process.env.NODE_ENV || 'development';

const dotenvFiles = [`.env.${NODE_ENV}.local`, `.env.${NODE_ENV}`, '.env.local'];

dotenvFiles.forEach((dotenvFile) => {
  if (fs.existsSync(dotenvFile)) {
    require('dotenv-expand')(
      require('dotenv').config({
        path: dotenvFile,
      }),
    );
  }
});

const reg = /^(EZV)/;
const raw = Object.keys(process.env)
  .filter((key) => reg.test(key))
  .reduce(
    (env, key) => {
      env[key] = process.env[key];
      return env;
    },
    {
      NODE_ENV: process.env.NODE_ENV || 'development',
    },
  );

const envStringified = Object.keys(raw).reduce((env, key) => {
  env[key] = JSON.stringify(raw[key]);
  return env;
}, {});

module.exports = envStringified;
