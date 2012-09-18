### gitinfo

Install: 

    npm install gitinfo

Get git information for your node.js app while it is running. Use like so:

    var gitinfo = require(__dirname + '/../lib/index.js');
    
    gitinfo.all(function(info){
      console.log(info); // Here is your info object, do as you please
    });

Here's what your info object looks like:

    {
      branch: "master",
      commit: "30948c8c9748387cca1710723ec70af3db6529f5",
      commitMsg: "finished test for /api/get_timezones"
    }