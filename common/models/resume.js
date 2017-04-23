'use strict';



var fs = require('fs');

module.exports = function(Resume) {

  Resume.generatePdf = function(userId, theme, callback) {
    Resume.findOne({where: {userId: userId}}, function(err, resume){
      if(!fs.existsSync("generated")) {
        fs.mkdirSync("generated");
      }
      fs.writeFile("generated/resume.json", JSON.stringify(resume.data), function(err){
        if(err){
          return console.error(err);
        }
        exec("hackmyresume BUILD generated/resume.json TO generated/u"+ resume.username +".pdf -t node_modules/jsonresume-theme-"+ theme, function(){
          var contentType = 'application/pdf';
          var contentDisposition = "filename=u"+ resume.username +".pdf";
          fs.readFile('generated/u'+ resume.username +'.pdf', function(err, data) {
            if (err){ console.error(err);}
            callback(null, data, contentType, contentDisposition)
          })

        });
      });
    });
  };

};
