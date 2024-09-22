import core from '@actions/core';
import github from '@actions/github';
import exec from '@actions/exec';

function runNeven() {
  core.notice('Hello from my custom Javascript Action');
}

runNeven();
