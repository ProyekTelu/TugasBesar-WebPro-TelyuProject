# Get Started (Lakukan secara linear)

prequisite : 
1. NodeJs LTS versi v18.18.1
2. Nodemon versi 3.0.1
3. Database MYSQL local bernama telyu_project sudah berjalan

## 1. Change local database configuration

pada file Database.js di \Backend\config\Database.js

ubah parameter ke 1, 2 dan 3 sesuai dengan database local kalian 

param 1 = nama database, contoh ("telyu_project",
param 2 = username nya, (contoh : "user"),
param 3 = password nya, (contoh : "password")

code yang ini di file Database.js : 

const db = new Sequelize("telyu_project", "user", "password", {
  host: "localhost",
  dialect: "mysql",
});

atau copy config dibawah ini dan ganti di file Database.js (harus sudah membuat database bernama telyu_project pada phpmyadmin.

XAMPP :

```sh
const db = new Sequelize("telyu_project", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
```

MAMPP :

```sh
const db = new Sequelize("telyu_project", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
```

## 2. Install NPM in Backend

pada folder Backend, jalankan perintah "npm install" pada terminal tanpa petik 2 atau copy code dibawah ini

```sh
npm install
```

## 3. Install NPM in frontend

pada folder frontend, jalankan perintah "npm install" pada terminal tanpa petik 2 atau copy code dibawah ini

```sh
npm install
```

## 4. Inisialisasi data database

pada folder backend, buka file index.js, lalu nyalakan fungsi <b>runInisialData()</b> dengan cara uncomment pemanggilan fungsi nya di line 73

# Run Application (Backend And Frontend)

## 1. Run Backend

buka terminal pada path Backend (pastikan di folder Backend), lalu tulis nodemon index atau copy code dibawah ini

```sh
nodemon index
```

## 2. Run Front-end

buka terminal pada path frontend (pastikan di folder frontend), lalu tulis npm start atau copy code dibawah ini

```sh
npm start
```

# atau jika ingin cepat, run file bernama start-project-telyu.bat di root folder (harus sudah melakukan npm install di frontend dan backend dan setting database).


<img src="Backend/img/hasnan.png" alt="Tumbal Proyek" title="Tumbal Proyek">
