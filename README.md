## Get Started (Lakukan secara linear)

prequisite : 
1. NodeJs LTS versi v18.18.1
2. Nodemon versi 3.0.1
3. Database MYSQL local sudah berjalan

# 1. Change local database configuration

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

# 2. Install NPM in Backend

pada folder Backend, jalankan perintah "npm install" pada terminal tanpa petik 2 atau copy code dibawah ini

```sh
npm install
```

# 3. Install NPM in frontend

pada folder frontend, jalankan perintah "npm install" pada terminal tanpa petik 2 atau copy code dibawah ini

```sh
npm install
```

## Run Application (Backend And Frontend)

# 1. Run Backend

buka terminal pada path Backend (pastikan di folder Backend), lalu tulis nodemon index atau copy code dibawah ini

```sh
nodemon index
```

# 2. Run Front-end

buka terminal pada path frontend (pastikan di folder frontend), lalu tulis npm start atau copy code dibawah ini

```sh
npm start
```

## atau jika ingin cepat, run file bernama start-project-telyu.bat di root folder (harus sudah melakukan npm install di frontend dan backend dan setting database).

