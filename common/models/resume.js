'use strict';



var fs = require('fs');

module.exports = function(Resume) {

  Resume.generatePdf = function(userId, theme, callback) {
    var pdfOfResume;
    Resume.findOne({where: {userId: userId}}, function(err, resume){
      pdfOfResume = resume.data;
      mkdir("generated")
      fs.writeFile("generated/resume.json", JSON.stringify(resume.data), function(err){
        if(err){
          return console.log(err);
        }
        exec("hackmyresume BUILD generated/resume.json TO generated/u"+ resume.username +".pdf -t node_modules/jsonresume-theme-"+ theme, function(){
          console.log("hacking done!");
          var contentType = 'application/pdf';
          var contentDisposition = "filename=u"+ resume.username +".pdf";
          fs.readFile('generated/u'+ resume.username +'.pdf', (err, data) => {
            if (err) throw err;
            callback(null, data, contentType, contentDisposition)
          });

        });
      });
    });
  };

};
