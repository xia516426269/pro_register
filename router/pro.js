//引入exp
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由对象
const r=express.Router();
//添加路由

//1.用户登录 pro_login
r.get("/v1/login/:uname&:upwd",(req,res)=>{
	var _uname=req.params.uname;
	var _upwd=req.params.upwd;
	var sql="select * from xz_user where uname=? and upwd=?"
	pool.query(sql,[_uname,_upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("1")
		}else{
			res.send("0")
		}
	})
})

//2.用户列表 pro_list
r.get("/v1/list",(req,res)=>{
	var sql="select * from xz_user"
	pool.query(sql,(err,result)=>{
		if(err) throw err;
	  res.send(result);
	})
})

//3.用户删除 pro_del
r.delete("/v1/del/:uid",(req,res)=>{
	var _uid=req.params.uid;
	var sql="delete from xz_user where uid=?"
	pool.query(sql,[_uid],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("1")
		}else{
			res.send("0")
		}
	})
})

//4.根据Uid查找用户 pro_search
r.get("/v1/search/:uid",(req,res)=>{
	var _uid=req.params.uid;
		//console.log(_uid)
	var sql="select * from xz_user where uid=?"
	pool.query(sql,[_uid],(err,result)=>{
		if(err) throw err;
		res.send(result);
		//console.log(result)
	})
})

//5.根据uid数据修改 pro_update
r.put("/v1/update",(req,res)=>{
 let obj=req.body;
 var sql="update xz_user set ? where uid=?";
 pool.query(sql,[obj,obj.uid],(err,result)=>{
	 if(err) throw err;
	 if(result.affectedRows>0){
		 res.send("1")
	 }else{
		 res.send("0")
	 }
 })
})

//6.用户名重复验证
r.get("/v1/getUname/:uname",(req,res)=>{
	let _uname=req.params.uname;
	//console.log(_uname)
	var sql="select * from xz_user where uname=?"
	pool.query(sql,[_uname],(err,result)=>{
		if (err) throw err;
		//console.log(result)
		if(result.length>0){
			res.send("1");
		}else{
			res.send("0");
		}
	})
	
})

//7.添加用户
r.post("/v1/reg",(req,res)=>{
	let obj=req.body;
	var sql="insert into xz_user set ?";
	pool.query(sql,[obj],(err,result)=>{
		if(err) throw err;	
		console.log(result)
		if(result.affectedRows>0){
			res.send("1");
		}else{
			res.send("0");
		}
	
	})
})

//导出路由
module.exports=r;