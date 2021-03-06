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


// Phòng
function getPhong(callback){
    connection.query('SELECT * FROM phong WHERE', function (error, results, fields) {
        if (error){
            callback(null,error)
        }
        callback(results)
    });
}

// Khách trọ
function getKhachTro(callback, params){
    console.log('params : ' + params)
    connection.query('SELECT * FROM khach_tro WHERE id_phong =?', params, function (error, results, fields) {
        if (error){
            callback(null,error)
        callback(results)
        }
        callback(results)
    });
}

function getKhachTro1(callback, params){
    console.log('params : ' + params)
    let query = `SELECT * FROM khach_tro WHERE id =` + params
    console.log('query : ' + query)
    connection.query(query, function (error, results, fields) {
        if (error){
            callback(null,error)
        }
        callback(results)
    });
}

function updateProfile(callback, params){
    console.log('params : ' + params)
    let query = `UPDATE khach_tro SET ` 
        + `ho_ten = '` + params.ho_ten + `', `
        + `gioi_tinh = '` + params.gioi_tinh + `', `
        + `nam_sinh = '` + params.nam_sinh + `', `
        + ` nghe_nghiep = '` + params.nghe_nghiep + `', `
        + `cmnd = '` + params.cmnd + `', `
        + `hktt = '` + params.hktt + `' `
        + `WHERE id = `+ params.id
    console.log('query : ' + query)
    connection.query(query, function (error, results, fields) {
        if (error !== null){
            console.log('error : ' + error)
            callback(null,error)
            return
        }        
        console.log('results : ' + results)
        callback(results, null)
    });
}

function createProfile(callback, params){
    console.log('params : ' + params)
    let query = `INSERT INTO khach_tro ( id, id_phong, ho_ten, gioi_tinh, nam_sinh, nghe_nghiep, cmnd, hktt)
        VALUE( null, ` + params.id_phong + `, '` + params.ho_ten + `', '` + params.gioi_tinh + `', '` 
        + params.nam_sinh + `', '` + params.nghe_nghiep + `', '` + params.cmnd + `', '` + params.hktt + `')` 
    console.log('query : ' + query)
    connection.query(query, function (error, results, fields) {
        if (error !== null){
            console.log('error : ' + error)
            callback(null,error)
            return
        }        
        console.log('results : ' + results)
        callback(results, null)
    });
}

function deleteProfile(callback, params){
    console.log('params : ' + params)
    let query = `DELETE FROM khach_tro WHERE id = `+params    
    console.log('query : ' + query)
    connection.query(query, function (error, results, fields) {
        if (error !== null){
            console.log('error : ' + error)
            callback(null,error)
            return
        }        
        console.log('results : ' + results)
        callback(results, null)
    });
}

// Hóa đơn
function getHoaDon(callback, params){
    console.log('params : ' + params)
    connection.query('SELECT * FROM hoa_don WHERE id_phong =? AND ngay_lap IS NOT NULL ORDER BY id_hoa_don desc', params, function (error, results, fields) {
        if (error){
            callback(null,error)
        }
        callback(results)
    });
}

function getHoaDonMoi(callback, params){
    console.log('params : ' + params)
    connection.query('SELECT * FROM hoa_don WHERE id_phong =? ORDER BY id_hoa_don desc limit 1', params, function (error, results, fields) {
        if (error){
            callback(null,error)
        }
        callback(results)
    });
}

function getDienNuoc(callback, params){
    console.log('params : ' + params)
    connection.query('SELECT id_hoa_don, hoa_don_thang, ngay_lap, so_nuoc_cu, so_nuoc_moi, so_dien_cu, so_dien_moi FROM hoa_don WHERE id_phong =? ORDER BY id_hoa_don desc LIMIT 1', params, function (error, results, fields) {
        if (error){
            callback(null,error)
        }
        callback(results)
    });
}
function updateDienNuoc(callback, params){
    console.log('params : ' + params)
    let query = `UPDATE hoa_don SET ` 
        + `so_nuoc_moi = '` + params.so_nuoc_moi + `', `
        + `so_dien_moi = '` + params.so_dien_moi + `' `
        + `WHERE id_hoa_don = `+ params.id_hoa_don + ` AND ngay_lap IS NULL`
    console.log('query : ' + query)
    connection.query(query, function (error, results, fields) {
        if (error !== null){
            console.log('error : ' + error)
            callback(null,error)
            return
        }        
        console.log('results : ' + results)
        callback(results, null)
    });
}

// Thông tin phòng
function getRoomDetail(callback, params){
    console.log('params : ' + params)
    connection.query('SELECT ten_phong, ten_loai, gia_phong, mo_ta, ghi_chu FROM phong INNER JOIN loai_phong ON phong.id_loai = loai_phong.id_loai WHERE id_phong =?', params, function (error, results, fields) {
        if (error){
            callback(null,error)
        }
        callback(results[0])
    });
}

function getBangGia(callback, params){
    console.log('params : ' + params)
    connection.query('SELECT * FROM bang_gia', params, function (error, results, fields) {
        if (error){
            callback(null,error)
        }
        callback(results)
    });
}


// Tài khoản
function testTaiKhoan(callback, params){
    console.log('params : ' + params)
    let query = `SELECT * FROM tai_khoan_user WHERE ten_dn=` + `'` + params.userName + `'` + ` AND pass = `+ `'` + params.pass+ `'` 
    console.log('query : ' + query)
    connection.query(query, function (error, results, fields) {
        if (error){
            callback(null,error)
        }
        callback(results)
    });
}

function testPassword(callback, params){
    console.log('params : ' + params)
    let query = `SELECT pass FROM tai_khoan_user WHERE id_user= ` + params.idUser + ` AND pass = '` + params.pass+ `'` 
    console.log('query : ' + query)
    connection.query(query, function (error, results, fields) {
        if (error){
            callback(null,error)
        }
        callback(results)
    });
}

function changePassword(callback, params){
    console.log('params : ' + params)
    let query = `UPDATE tai_khoan_user SET pass = '` + params.newPass + `' WHERE id_user= ` + params.idUser + ` AND pass = '` + params.pass+ `'` 
    console.log('query : ' + query)
    connection.query(query, function (error, results, fields) {
        if (error){
            callback(null, error)
        }
        callback(results, null)
    });
}


// Xe
function getMotorDetail(callback, params){
    console.log('params : ' + params)
    let query = `SELECT * FROM ql_xe WHERE id_phong =`+params    
    console.log('query : ' + query)
    connection.query(query, function (error, results, fields) {
        if (error !== null){
            console.log('error : ' + error)
            callback(null,error)
            return
        }        
        console.log('results : ' + results)
        callback(results, null)
    });
}

function createMotor(callback, params){
    console.log('params : ' + params)
    let query = `INSERT INTO ql_xe ( id_xe, id_phong, so_xe, mo_ta)
        VALUE( null, ` + params.id_phong + `, '` + params.so_xe + `', '` + params.mo_ta + `')` 
    console.log('query : ' + query)
    connection.query(query, function (error, results, fields) {
        if (error !== null){
            console.log('error : ' + error)
            callback(null,error)
            return
        }        
        console.log('results : ' + results)
        callback(results, null)
    });
}

function updateMotor(callback, params){
    console.log('params : ' + params)
    let query = `UPDATE ql_xe SET ` 
        + `so_xe = '` + params.so_xe + `', `
        + `mo_ta = '` + params.mo_ta + `' `
        + `WHERE id_xe = `+ params.id_xe
    console.log('query : ' + query)
    connection.query(query, function (error, results, fields) {
        if (error !== null){
            console.log('error : ' + error)
            callback(null,error)
            return
        }        
        console.log('results : ' + results)
        callback(results, null)
    });
}

function deleteMotor(callback, params){
    console.log('params : ' + params)
    let query = `DELETE FROM ql_xe WHERE id_xe = `+params
    console.log('query : ' + query)
    connection.query(query, function (error, results, fields) {
        if (error !== null){
            console.log('error : ' + error)
            callback(null,error)
            return
        }        
        console.log('results : ' + results)
        callback(results, null)
    });
}

//Thông báo

function getThongBaoMoi(callback, params){
    let query = `SELECT * FROM thong_bao ORDER BY id_tin desc limit 1`  
    console.log('query : ' + query)
    connection.query(query, function (error, results, fields) {
        if (error !== null){
            console.log('error : ' + error)
            callback(null,error)
            return
        }        
        console.log('results : ' + results)
        callback(results, null)
    });
}

function getThongBao(callback, params){
    let query = `SELECT * FROM thong_bao ORDER BY id_tin desc limit 10`  
    console.log('query : ' + query)
    connection.query(query, function (error, results, fields) {
        if (error !== null){
            console.log('error : ' + error)
            callback(null,error)
            return
        }        
        console.log('results : ' + results)
        callback(results, null)
    });
}

module.exports = {
    connection:connection,
    connect:connect,
    getPhong:getPhong,
    getKhachTro:getKhachTro,
    getKhachTro1:getKhachTro1,
    testTaiKhoan:testTaiKhoan,
    updateProfile:updateProfile,
    createProfile:createProfile,
    deleteProfile:deleteProfile,
    getHoaDon:getHoaDon,
    getHoaDonMoi:getHoaDonMoi,
    getDienNuoc:getDienNuoc,
    getRoomDetail:getRoomDetail,
    getBangGia:getBangGia,
    getMotorDetail:getMotorDetail,
    createMotor:createMotor,
    updateMotor:updateMotor,
    deleteMotor:deleteMotor,
    updateDienNuoc:updateDienNuoc,
    getThongBaoMoi:getThongBaoMoi,
    getThongBao:getThongBao,
    testPassword:testPassword,
    changePassword:changePassword
}
