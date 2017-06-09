// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var dsConfig = require('../datasources.json');
var fs = require('fs');
var path = require('path');

module.exports = function(app) {
  var User = app.models.user;
  var Resume = app.models.Resume;

  // //verified
  // app.get('/verified', function(req, res) {
  //   res.render('verified');
  // });

  app.get("/api/Resumes/viewHtml", function(req, res){
    var userId = req.query.userId;
    var resumeId = req.query.resumeId;
    var theme = req.query.theme;
    Resume.findOne({where: {id: resumeId, userId: userId}}, function(err, resume){
      if(!fs.existsSync("generated")){
        fs.mkdirSync("generated");
      }
      console.log(resume);
      fs.writeFile("generated/resume.json", JSON.stringify(resume.data), function(err){
        if(err){
          return console.error(err);
        }

        var output_name = resume.username + resume.resumename + resume.id + ".html";
        exec("hackmyresume BUILD generated/resume.json TO generated/" + 
          output_name + " -t node_modules/jsonresume-theme-" + theme, function(){
          console.log("huacking done!");
          res.sendFile(path.join(__dirname + "/../../generated/" + output_name));
        });
      });
    });
  });
};
