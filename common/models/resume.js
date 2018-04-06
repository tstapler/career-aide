'use strict';

const {exec} = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const {supportedThemes} = require('../themes');
const _ = require('lodash')

const contentTypes = {
  pdf: 'application/pdf',
  html: 'text/html',
};

const TMP_FOLDER = 'generated-files';

function generateFile(userId, resumeId, themeName,
  resume, fileFormat, callback) {
  if (!resume) {
    console.log('No resume!');
    return callback(true, '', 'text/html', '');
  }


  if (!_.includes(supportedThemes, themeName)) {
    console.log('Unsupported Resume name');
    return callback(true, '', 'text/html', '');
  }

  let filename = `u_${userId}-r_${resumeId}`;
  let jsonFile = path.join(TMP_FOLDER, `${filename}.json`);
  let outputFile = path.join(TMP_FOLDER, `${filename}_${themeName}.${fileFormat}`);
  let themeModule = path.join('node_modules', `jsonresume-theme-${themeName}`);

  fs.ensureDir(TMP_FOLDER, err => console.error(err));

  fs.writeJson(jsonFile, resume.data).then(() => {
    console.log('Created shit');
    let hmrExec = `node_modules/.bin/hackmyresume BUILD ${jsonFile} TO ${outputFile} -t ${themeModule} -p weasyprint`
    console.log(hmrExec);
    exec(hmrExec,
      () => {
        let contentType = contentTypes[fileFormat];
        let contentDisposition = `filename=${filename}`;
        fs.readFile(outputFile, (err, fileData) => {
          if (err) {
            console.error(err);
          }
          callback(null, fileData, contentType, contentDisposition);
          // TODO: Clean up after
        });
      });
  });
}

module.exports = (Resume) => {
  Resume.generatePdf = (userId, resumeId, themeName, callback) => {
    Resume.findOne({
      where: {
        id: resumeId,
        userId: userId,
      },
    }, (err, resume) => {
      generateFile(userId, resumeId, themeName,
        resume, 'pdf', callback);
    });
  };

  Resume.generateHtml = (userId, resumeId, themeName, callback) => {
    Resume.findOne({
      where: {
        id: resumeId,
        userId: userId,
      },
    }, (err, resume) => {
      generateFile(userId, resumeId, themeName,
        resume, 'html', callback);
    });
  };
};
