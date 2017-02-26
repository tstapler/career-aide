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

  app.get("/resumes/viewHtml", function(req, res){
    var userId = req.query.userId;
    var theme = req.query.theme;
    Resume.findOne({where: {userId: userId}}, function(err, resume){
      pdfOfResume = resume.data;
      mkdir("generated");
      fs.writeFile("generated/resume.json", JSON.stringify(resume.data), function(err){
        if(err){
          return console.log(err);
        }
        exec("hackmyresume BUILD generated/resume.json TO generated/u"+ resume.username +".html -t node_modules/jsonresume-theme-"+ theme, function(){
          console.log("hacking done!");
          res.sendFile(path.join(__dirname + "/../../generated/u" + resume.username + ".html"));
        });
      });
    });
  });

  //log a user in
  app.post('/login', function(req, res) {
    User.login({
      email: req.body.email,
      password: req.body.password
    }, 'user', function(err, token) {
      if (err) {
        res.render('response', {
          title: 'Login failed',
          content: err,
          redirectTo: '/',
          redirectToLinkText: 'Try again'
        });
        return;
      }

    });
  });

  //log a user out
  app.get('/logout', function(req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);
    User.logout(req.accessToken.id, function(err) {
      if (err) return next(err);
      res.redirect('/');
    });
  });

  //send an email with instructions to reset an existing user's password
  app.post('/request-password-reset', function(req, res, next) {
    User.resetPassword({
      email: req.body.email
    }, function(err) {
      if (err) return res.status(401).send(err);

      res.render('response', {
        title: 'Password reset requested',
        content: 'Check your email for further instructions',
        redirectTo: '/',
        redirectToLinkText: 'Log in'
      });
    });
  });

  //show password reset form
  app.get('/reset-password', function(req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);
    res.render('password-reset', {
      accessToken: req.accessToken.id
    });
  });

  //reset the user's pasword
  app.post('/reset-password', function(req, res, next) {
    if (!req.accessToken) return res.sendStatus(401);

    //verify passwords match
    if (!req.body.password ||
        !req.body.confirmation ||
        req.body.password !== req.body.confirmation) {
      return res.sendStatus(400, new Error('Passwords do not match'));
    }

    User.findById(req.accessToken.userId, function(err, user) {
      if (err) return res.sendStatus(404);
      user.updateAttribute('password', req.body.password, function(err, user) {
      if (err) return res.sendStatus(404);
        console.log('> password reset processed successfully');
        res.render('response', {
          title: 'Password reset success',
          content: 'Your password has been reset successfully',
          redirectTo: '/',
          redirectToLinkText: 'Log in'
        });
      });
    });
  });
};
