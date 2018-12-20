// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

// Text + chalk definitions
const data = {
  name: chalk.white('Nacho Álvarez /'),
  handle: chalk.cyan('nachoalvarez'),
  work: chalk.white('JavaScript Developer'),
  twitter: chalk.cyan('https://twitter.com/nachoaIvarez'),
  github: chalk.cyan('https://github.com/nachoaIvarez'),
  keybase: chalk.cyan('https://keybase.com/nachoalvarez'),
  npx: chalk.white('npx nachoalvarez'),
  labelWork: chalk.white.bold('      Work:'),
  labelTwitter: chalk.white.bold('   Twitter:'),
  labelGitHub: chalk.white.bold('    GitHub:'),
  labelkeybase: chalk.white.bold('   Keybase:'),
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const twittering = `${data.labelTwitter}  ${data.twitter}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const keybaseing = `${data.labelkeybase}  ${data.keybase}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading +
  newline +
  newline +
  working +
  newline +
  twittering +
  newline +
  githubing +
  newline +
  keybaseing;

console.log(chalk.green(boxen(output, options)));
