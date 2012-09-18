// All functions take a hash as argument

var util = require('util');
var exec = require('child_process').exec;
var async = require("async");

var gitBranch = function (info,callback) {
  var command = 'git status | sed -n 1p'
  var child = exec(command, function (error, stdout, stderr) {
    if (error !== null) {
	    callback();
    } else {
      var arr = stdout.split(' ');
      info.branch = arr[arr.length - 1].replace(/^\s*|\s*$/g, '');
      callback(info);
    }
  });
}

var gitCommit = function (info,callback) {
  var command = 'git log | sed -n 1p'
  var child = exec(command, function (error, stdout, stderr) {
    if (error !== null) {
	    	    callback();
    } else {
      var arr = stdout.split(' ');
      info.commit = arr[arr.length - 1].replace(/^\s*|\s*$/g, '');
      callback(info);
    }
  });
}

var gitCommitMsg = function (info,callback) {
  var command = 'git log | sed -n 5p'
  var child = exec(command, function (error, stdout, stderr) {
    if (error !== null) {
      callback();
    } else {
      info.commitMsg = stdout.replace(/^\s*|\s*$/g, '');
      callback(info);
    }
  });
}

var all = function (callback) {
	var info = {
		'branch': null,
		'commit': null,
		'commitMsg': null
	};
	
	gitBranch(info, function(info) {
	  gitCommit(info, function(info){
	    gitCommitMsg(info, function(info){
	      callback(info);
      })
	  })
  });
}

exports.all = all;