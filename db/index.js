// 导入mysql模块
const mysql = require('mysql')

// 创建数据库链接对像
const db = mysql.createPool({
	// 本机地址
	host: '127.0.0.1',
	// 用户名
	user: 'root',
	// 密码
	password: 'admin123',
	// 数据库名字
	database: 'my_db_01',
})
// 向外共享db数据库链接对像
module.exports = db
