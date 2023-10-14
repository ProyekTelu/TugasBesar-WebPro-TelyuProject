# Get Started

pada file Database.js di \Backend\config\Database.js

ubah parameter ke 1, 2 dan 3 sesuai dengan database local kalian 

param 1 = nama database,
param 2 = username nya (default root),
param 3 = password nya (default "")

const db = new Sequelize("telyu_project", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

# Install NPM in Backend

pada folder Backend, jalankan perintah npm install.

# Install NPM in telyu-project

pada folder Frontend\telyu-project, jalankan perintah npm install.

# How to Run backend

buka terminal pada path backend, lalu tulis nodemon index

# How to Run front-end

buka terminal pada path telyu-project, lalu tulis npm start
