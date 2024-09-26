const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

function runNeven() {
  const bucket = core.getInput('bucket', { trimWhitespace: true, required: true });
  const bucketRegion = core.getInput('bucket-region', { trimWhitespace: true, required: true });
  const distFolder = core.getInput('dist-folder', { trimWhitespace: true, required: true });

  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`); // aws cli send commands to a s3 bucket

  const websiteUrl = `http://${bucket}.s3-website.${bucketRegion}.amazonaws.com`;
  core.setOutput('website-url', websiteUrl); // ekvivalent echo "cache='${{ inputs.caching-nev }}'">>$GITHUB_OUTPUT, vratiti će output
}

runNeven();
