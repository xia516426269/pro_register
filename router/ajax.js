//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//console.log(pool);
//创建路由器对象
const r=express.Router();
//添加路由
r.get("/prac",(req,res)=>{
	console.log("接收到了请求");
})
//r.get("/test",(req,res)=>{
//console.log("接收到了请求");
//res.send("ajax接口测试");
//})
// r.get("/get_login",(req,res)=>{
// 	var _uname=req.query.uname;
// 	var _upwd=req.query.upwd;
// 	//res.send(_uname+"..."+_upwd);
// 	var sql="select * from xz_user where uname=? && upwd=?";
// 	pool.query(sql,[_uname,_upwd],(err,result)=>{
// 		if(err) throw err;
// 		if(result.length>0){
// 			res.send("1");
// 		}else{
// 			res.send("0");
// 		}
// 	})
// });

// r.get("/restful_get/:uname&:upwd",(req,res)=>{
// 	var _uname=req.params.uname;
// 	var _upwd=req.params.upwd;
// 	res.send(_uname+'...'+_upwd);
// });

//删除数据库用户
// r.delete("/06_del/:uid",(req,res)=>{
// 	var _uid=req.params.uid;
// 	var sql="delete from xz_user where uid=?";
// 	pool.query(sql,[_uid],(err,result)=>{
// 		if(err) throw err;
// 		if(result.affectedRows>0){
// 			res.send("1");
// 		}else{
// 			res.send("0");
// 		}
// 	});
// })

// //查询所有用户
// r.get("/alluser",(req,res)=>{
// 	var sql="select * from xz_user";
// 	 pool.query(sql,(err,result)=>{
// 		 if(err) throw err;
// 		 res.send(result);
// 	 })
// })

r.post("/post_login",(req,res)=>{
	var _uname=req.body.uname;
	var _upwd=req.body.upwd;
	
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[_uname,_upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	})
	
r.put("/put_login",(req,res)=>{
	var _uname=req.body.uname;
	var _upwd=req.body.upwd;
	var sql="select * from xz_user where uname=? and upwd=?";
	pool.query(sql,[_uname,_upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	})
})	
})
//导出路由器
module.exports=r;





