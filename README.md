# Get Started (Lakukan secara linear)

prequisite : 
1. NodeJs LTS versi v18.18.1
2. Nodemon versi 3.0.1
3. Database MYSQL local sudah berjalan

# Change local database configuration

pada file Database.js di \Backend\config\Database.js

ubah parameter ke 1, 2 dan 3 sesuai dengan database local kalian 

param 1 = nama database contoh ("telyu_project",
param 2 = username nya (contoh : "root"),
param 3 = password nya (contoh : "root")

code yang ini : 

const db = new Sequelize("telyu_project", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

# Install NPM in Backend

pada folder Backend, jalankan perintah "npm install" pada terminal tanpa petik 2.

# Install NPM in frontend

pada folder frontend, jalankan perintah "npm install" pada terminal tanpa petik 2.

# How to Run backend

buka terminal pada path backend, lalu tulis nodemon index

# How to Run front-end

buka terminal pada path telyu-project, lalu tulis npm start
