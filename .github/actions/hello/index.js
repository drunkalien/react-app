import * as core from '@actions/core';
import github from '@actions/github';

try {
  const name = core.getInput('who-to-greet');

  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput('time', time.toTimeString());

  console.log(JSON.stringify(github, null, '\t'));
} catch (error) {
  console.log(error.message);
  // core.setFailed(error.message);
}
