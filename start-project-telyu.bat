@echo off

start cmd /k "cd Backend && nodemon index.js"

start cmd /k "cd frontend && npm start"
