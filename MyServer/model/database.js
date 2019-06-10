var mysql      = require('mysql');
const config = require('../config/config')
var connection = mysql.createConnection(config);

function connect(callback){
    connection.connect(function(err) {
        if (err) {
            // console.error('Error connecting: ' + err.stack);
            callback(null,err)
            return;
        }
        callback(connection,null)
        // console.log('Connected as id ' + connection.threadId);
    });
}

function getPhong(callback){
    connection.query('SELECT * FROM phong where', function (error, results, fields) {
        if (error){
            callback(null,error)
        }
        callback(results)
    });
}

function getKhachTro(callback, params){
    console.log(params)
    connection.query('SELECT * FROM khach_tro where id_phong =?', params, function (error, results, fields) {
        if (error){
            callback(null,error)
        }
        callback(results)
    });
}

function testTaiKhoan(callback, params){
    console.log(params)
    let query = `SELECT * FROM tai_khoan_user where ten_dn=` + `'` + params.userName + `'` + ` and pass = `+ `'` + params.pass+ `'` 
    console.log(query)
    connection.query(query, function (error, results, fields) {
        if (error){
            callback(null,error)
        }
        callback(results)
    });
}

// function registerUser(callback,params){
//     console.log(params)
//     var query = "INSERT INTO login (SDT,Pwd,Role,Ten,Email,Tuoi) VALUES ?";
//     console.log(query)
//     connection.query('INSERT INTO login SET ?',params, function (error, results, fields) {
//         if (error){
//             callback(null,error)
//         }
//         callback(results)
//     });
// }
module.exports = {
    connection:connection,
    connect:connect,
    getPhong:getPhong,
    getKhachTro:getKhachTro,
    testTaiKhoan:testTaiKhoan,
    // registerUser:registerUser    
}
