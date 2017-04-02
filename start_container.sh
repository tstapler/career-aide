#!/bin/bash - 
service nginx start
supervisor server/server.js
