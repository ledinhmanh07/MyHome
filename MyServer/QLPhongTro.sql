-- ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456';

DROP DATABASE ql_phong_tro;


CREATE DATABASE IF NOT EXISTS ql_phong_tro CHARACTER SET 'utf8' COLLATE 'utf8_unicode_ci';
USE ql_phong_tro;


-- Tạo Bảng dữ liệu 

CREATE TABLE loai_phong (
	id_loai INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ten_loai NVARCHAR(30) NOT NULL UNIQUE,
    gia_phong DOUBLE
);

CREATE TABLE phong (
	id_phong INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_loai  INT(10),
    ten_phong NVARCHAR(30) NOT NULL UNIQUE,
    mo_ta NVARCHAR(250),
    ghi_chu NVARCHAR(150),
    FOREIGN KEY (id_loai) REFERENCES loai_phong(id_loai)
);

CREATE TABLE bang_gia (
	id_gia INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ten_gia NVARCHAR(50) NOT NULL UNIQUE,
    gia DOUBLE,
    don_vi NVARCHAR(30)
);

CREATE TABLE khach_tro (
	id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_phong INT(10),
    ho_ten NVARCHAR(50),
    gioi_tinh NVARCHAR(10),
    nam_sinh NVARCHAR(10),
    nghe_nghiep NVARCHAR(30),
    cmnd NVARCHAR(15),
    hktt NVARCHAR(100),
    FOREIGN KEY (id_phong) REFERENCES phong(id_phong)
);

CREATE TABLE ql_xe (
	id_xe INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_phong INT(10),
    so_xe  NVARCHAR(14),
    mo_ta NVARCHAR(100),
	FOREIGN KEY (id_phong) REFERENCES phong(id_phong)
);

CREATE TABLE hoa_don (
	id_hoa_don INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_phong INT(10),
    id_user INT(10),
    hoa_don_thang NVARCHAR(14),
    ngay_lap NVARCHAR(14),
    so_nuoc_cu INT,
    so_nuoc_moi INT,
    gia_nuoc DOUBLE,
    so_dien_cu INT,
    so_dien_moi INT,
    gia_dien DOUBLE,
    so_xe INT,
    gia_xe DOUBLE,
    internet DOUBLE,
    truyen_hinh_cap DOUBLE,
    ve_sinh DOUBLE,
    khac DOUBLE,
    gia_phong DOUBLE,
    tong_tien DOUBLE,
    tinh_trang BOOLEAN,
	FOREIGN KEY (id_phong) REFERENCES phong(id_phong),
    FOREIGN KEY (id_user) REFERENCES tai_khoan_user(id_user)
);

-- DROP TABLE hoa_don;

CREATE TABLE dv_phong_su_dung (	
    id_phong INT(10),
    internet BOOLEAN,
    truyen_hinh_cap BOOLEAN,
    ve_sinh BOOLEAN,
	FOREIGN KEY (id_phong) REFERENCES phong(id_phong)
);

CREATE TABLE tai_khoan_user (
	id_user INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_phong INT(10) NOT NULL UNIQUE,
    ten_dn NVARCHAR(20) NOT NULL UNIQUE,
    pass NVARCHAR(20),
	FOREIGN KEY (id_phong) REFERENCES phong(id_phong)
);

CREATE TABLE admin (
	id_admin INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	ho_ten NVARCHAR(30),
    ten_dn NVARCHAR(20) NOT NULL UNIQUE,
    pass NVARCHAR(20)
);

CREATE TABLE thong_bao (
	id_tin INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_admin INT(10) NOT NULL,
	ngay_tao NVARCHAR(30),
    tieu_de NVARCHAR(50) NOT NULL,
    noi_dung NVARCHAR(200) NOT NULL,
    FOREIGN KEY (id_admin) REFERENCES admin(id_admin)
);

------------------------------------------------------------ 
-- Thêm dữ liệu 'Loại Phòng'

INSERT INTO loai_phong (id_loai, ten_loai, gia_phong)
VALUES ( null, 'Phòng Nhỏ', 2800000);

INSERT INTO loai_phong (id_loai, ten_loai, gia_phong)
VALUES ( null, 'Phòng Vừa', 3800000);

INSERT INTO loai_phong (id_loai, ten_loai, gia_phong)
VALUES ( null, 'Phòng Lớn', 5800000);


------------------------------------------------------------
-- Thêm dữ liệu 'Phòng'

INSERT INTO phong (id_phong, id_loai, ten_phong, mo_ta, ghi_chu)
VALUE( null, (SELECT id_loai FROM loai_phong WHERE ten_loai = 'Phòng Nhỏ'), '201', null, null);

INSERT INTO phong (id_phong, id_loai, ten_phong, mo_ta, ghi_chu)
VALUE( null, (SELECT id_loai FROM loai_phong WHERE ten_loai = 'Phòng Nhỏ'), '202', null, null);

INSERT INTO phong (id_phong, id_loai, ten_phong, mo_ta, ghi_chu)
VALUE( null, (SELECT id_loai FROM loai_phong WHERE ten_loai = 'Phòng Nhỏ'), '203', null, null);

INSERT INTO phong (id_phong, id_loai, ten_phong, mo_ta, ghi_chu)
VALUE( null, (SELECT id_loai FROM loai_phong WHERE ten_loai = 'Phòng Vừa'), '301', null, null);

INSERT INTO phong (id_phong, id_loai, ten_phong, mo_ta, ghi_chu)
VALUE( null, (SELECT id_loai FROM loai_phong WHERE ten_loai = 'Phòng Vừa'), '302', null, null);

INSERT INTO phong (id_phong, id_loai, ten_phong, mo_ta, ghi_chu)
VALUE( null, (SELECT id_loai FROM loai_phong WHERE ten_loai = 'Phòng Vừa'), '303', null, null);

INSERT INTO phong (id_phong, id_loai, ten_phong, mo_ta, ghi_chu)
VALUE( null, (SELECT id_loai FROM loai_phong WHERE ten_loai = 'Phòng Lớn'), '401', null, null);

INSERT INTO phong (id_phong, id_loai, ten_phong, mo_ta, ghi_chu)
VALUE( null, (SELECT id_loai FROM loai_phong WHERE ten_loai = 'Phòng Lớn'), '402', null, null);

INSERT INTO phong (id_phong, id_loai, ten_phong, mo_ta, ghi_chu)
VALUE( null, (SELECT id_loai FROM loai_phong WHERE ten_loai = 'Phòng Lớn'), '403', null, null);


------------------------------------------------------------
-- Thêm dữ liệu 'Bảng Gía'

INSERT INTO bang_gia ( id_gia, ten_gia, gia, don_vi)
VALUE( null, 'Điện', 4000, 'KW');

INSERT INTO bang_gia ( id_gia, ten_gia, gia, don_vi)
VALUE( null, 'Nước', 15000, 'Khối');

INSERT INTO bang_gia ( id_gia, ten_gia, gia, don_vi)
VALUE( null, 'Internet', 120000, 'Tháng');

INSERT INTO bang_gia ( id_gia, ten_gia, gia, don_vi)
VALUE( null, 'Truyển hình cáp', 100000, 'Tháng');

INSERT INTO bang_gia ( id_gia, ten_gia, gia, don_vi)
VALUE( null, 'Vệ sinh', 20000, 'Tháng');


------------------------------------------------------------
-- Thêm dữ liệu 'Khách Trọ'

INSERT INTO khach_tro ( id, id_phong, ho_ten, gioi_tinh, nam_sinh, nghe_nghiep, cmnd, hktt)
VALUE( null, (SELECT id_phong FROM phong WHERE ten_phong = '301'), 'Lê Đình Mạnh', 'Nam', '10-02-1997', 'Sinh Viên', '285612119', 'Bình Phước');

INSERT INTO khach_tro ( id, id_phong, ho_ten, gioi_tinh, nam_sinh, nghe_nghiep, cmnd, hktt)
VALUE( null, (SELECT id_phong FROM phong WHERE ten_phong = '301'), 'Võ Đình Phước Trung', 'Nam', '22-06-1997', 'Sinh Viên', '285612217', 'TP.HCM');


------------------------------------------------------------
-- Thêm dữ liệu 'Quản Lý Xe'

INSERT INTO ql_xe ( id_xe, id_phong, so_xe, mo_ta)
VALUE ( null, (SELECT id_phong FROM phong WHERE ten_phong = '301'), '93-M1 8995', 'YAMAHA màu đỏ - đen');

INSERT INTO ql_xe ( id_xe, id_phong, so_xe, mo_ta)
VALUE ( null, (SELECT id_phong FROM phong WHERE ten_phong = '301'), '93-h2 1221', 'HONDA đen - xám');


------------------------------------------------------------
-- Thêm dữ liệu 'Dịch Vụ Phòng Đang Dùng'

INSERT INTO dv_phong_su_dung ( id_phong, internet, truyen_hinh_cap, ve_sinh )
VALUE ((SELECT id_phong FROM phong WHERE ten_phong = '301'), true, false, true);


------------------------------------------------------------
-- Thêm dữ liệu 'Tài Khoản Người Dùng'

INSERT INTO tai_khoan_user ( id_user, id_phong, ten_dn, pass )
VALUE ( null,(SELECT id_phong FROM phong WHERE ten_phong = '301'), 'dinhmanh', '123456');


------------------------------------------------------------
-- Thêm dữ liệu 'Hóa Đơn'
-- SELECT CURDATE() <lấy ngày hiện tại> 
INSERT INTO hoa_don ( id_hoa_don, id_phong, id_user, hoa_don_thang, ngay_lap, so_nuoc_cu, so_nuoc_moi, gia_nuoc, so_dien_cu, so_dien_moi, gia_dien, so_xe, gia_xe, internet, truyen_hinh_cap, ve_sinh, khac, gia_phong, tong_tien, tinh_trang )
VALUE ( null,(SELECT id_phong FROM phong WHERE ten_phong = '301'), (SELECT id_user FROM tai_khoan_user where id_phong = (SELECT id_phong FROM phong WHERE ten_phong = '301')), '04/2019', '25/04/2019', 100, 120, 4000, 102, 120, 15000, 3, 150000, 120000, 0, 40000, null, 3800000, 4800000, false);

INSERT INTO hoa_don ( id_hoa_don, id_phong, id_user, hoa_don_thang, ngay_lap, so_nuoc_cu, so_nuoc_moi, gia_nuoc, so_dien_cu, so_dien_moi, gia_dien, so_xe, gia_xe, internet, truyen_hinh_cap, ve_sinh, khac, gia_phong, tong_tien, tinh_trang )
VALUE ( null,(SELECT id_phong FROM phong WHERE ten_phong = '301'), (SELECT id_user FROM tai_khoan_user where id_phong = (SELECT id_phong FROM phong WHERE ten_phong = '301')), '05/2019', '25/05/2019', 120, 150, 4000, 120, 133, 15000, 3, 150000, 120000, 0, 40000, null, 3800000, 4800000, false);

INSERT INTO hoa_don ( id_hoa_don, id_phong, id_user, hoa_don_thang, ngay_lap, so_nuoc_cu, so_nuoc_moi, gia_nuoc, so_dien_cu, so_dien_moi, gia_dien, so_xe, gia_xe, internet, truyen_hinh_cap, ve_sinh, khac, gia_phong, tong_tien, tinh_trang )
VALUE ( null,(SELECT id_phong FROM phong WHERE ten_phong = '301'), (SELECT id_user FROM tai_khoan_user where id_phong = (SELECT id_phong FROM phong WHERE ten_phong = '301')), '06/2019', null, 150, 182, 4000, 132, 140, 15000, 3, 150000, 120000, 0, 40000, null, 3800000, 4850000, false);


------------------------------------------------------------
-- Thêm dữ liệu 'Tài Khoản ADMIN'

INSERT INTO admin ( id_admin, ho_ten, ten_dn, pass )
VALUE ( null, 'Lê Đình Mạnh', 'dinhmanh', '123456');


------------------------------------------------------------
-- Thêm dữ liệu 'Thông Báo'

INSERT INTO thong_bao ( id_tin, id_admin, ngay_tao, tieu_de, noi_dung )
VALUE ( null, 1, '26/06/2019', 'Tiền Phòng Tháng 6', 'Thời gian đóng tiền phòng tháng 6 bắt đầu ngày 01/07 đến ngày 05/07/2019, nếu quá hạn không đóng sẽ phụ thu 6%. Cảm ơn!!!');

INSERT INTO thong_bao ( id_tin, id_admin, ngay_tao, tieu_de, noi_dung )
VALUE ( null, 1, '26/05/2019', 'Tiền Phòng Tháng 5', 'Thời gian đóng tiền phòng tháng 5 bắt đầu ngày 01/06 đến ngày 05/06/2019, nếu quá hạn không đóng sẽ phụ thu 6%. Cảm ơn!!!');