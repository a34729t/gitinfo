var assert = require('assert')
var gitinfo = require(__dirname + '/../lib/index.js');

gitinfo.all(function(info){
  assert.equal(info.branch, 'master');
  // We won't know what the branch and stuff is unless we do the lib commands anyways, so we're fine.
});
