const { series } = require('gulp');
const spawn = require('child_process').spawn;


function setGitHooks() {
  return spawn('cp', ['-rf', 'scripts/hooks/', '.git/hooks/']);
}

setGitHooks.description = 'Set git hooks';

exports.prepare = series(setGitHooks);
