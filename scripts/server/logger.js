const chalk = require('chalk');
const ip = require('ip');

const divider = chalk.gray('-----------------------------------');

const logger = {
  error: err => {
    console.error(chalk.red(err));
  },
  start: (port, host) => {
    // eslint-disable-next-line no-console
    console.log(`Server started! ${chalk.green('✓')}`);
    // eslint-disable-next-line no-console
    console.log(`
${chalk.bold('App running at:')}
${divider}
- Local: ${chalk.blue(`  http://${host}:${port}`)}
- Network: ${chalk.blue(`http://${ip.address()}:${port}`)}
${divider}
${chalk.magenta(`Press ${chalk.italic('Ctrl+c')} to stop`)}
    `);
  },
};

module.exports = logger;
