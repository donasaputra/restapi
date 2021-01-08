var mysql = require('mysql2');

//buat koneksi database
const conn = mysql.createConnection({
    host:'localhost',
    user:'admin',
    password: 'admin',
    database : 'dbrestapi'
})
conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;