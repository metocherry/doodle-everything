const { task, series } = require('gulp');
const spawn = require('child_process').spawn;


const prepare = () => spawn('cp', ['-rf', 'scripts/hooks/', '.git/hooks/']);

const preinstall = series(prepare);
preinstall.description = 'Set settings for an application';

exports.preinstall = preinstall;
