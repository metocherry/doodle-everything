const { task, series } = require('gulp');
const spawn = require('child_process').spawn;
const browser = require('browser-sync');
// const querystring = require('querystring');

const options = process.argv.slice(3).reduce((map: Map<string, any>, text: string) => {
  const matched = text.match(/^--(\w+)=?([\w-_]+)?/);
  if (matched) {
    map.set(matched[1].trim(), matched[2] === 'true' || matched[2] === 'false' ? eval(matched[2]) : matched[2]?.trim() ?? false);
  }
  return map;
}, new Map());


const prepare = () => spawn('cp', ['-rf', 'scripts/hooks/', '.git/hooks/']);

const sync = () => {
  const server = browser.create();

  server.init({
    server: {
      baseDir: ''
    }
  });
};

const preinstall = series(prepare);
preinstall.description = 'Set settings for an application';

exports.preinstall = preinstall;

exports.default = done => {
  console.log('done');
  done();
};
