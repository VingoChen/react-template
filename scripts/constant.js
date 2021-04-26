const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../');
const PROJECT_NAME = path.parse(PROJECT_PATH).name;

const APP_ENV = process.env.NODE_ENV;
const IS_DEV = APP_ENV !== 'production';

const SERVER_HOST = '127.0.0.1';
const SERVER_PORT = 2021;

module.exports = {
  PROJECT_PATH,
  PROJECT_NAME,
  APP_ENV,
  IS_DEV,
  SERVER_HOST,
  SERVER_PORT,
};
