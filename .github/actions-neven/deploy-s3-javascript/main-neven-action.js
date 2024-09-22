const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function runNeven() {
  core.notice('Hello from my custom Javascript Action!');
}

runNeven();
