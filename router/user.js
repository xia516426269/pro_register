//引入express
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//console.log(pool);
//创建路由器对象
const r=express.Router();
//添加路由
/*
//1.用户注册
r.post('/reg',(req,res)=>{
   //1.1获取post请求的数据
   let obj=req.body;
   console.log(obj);
   //1.2验证各项数据是否为空
   if(!obj.uname){
     res.send({code:401,msg:'uname required'});
	 return;//阻止函数往后执行，就会跳出函数
   }
   //添加其他三项验证
   if(!obj.upwd){
     res.send({code:402,msg:'upwd required'});
	 return;
   }
   if(!obj.email){
     res.send({code:403,msg:'email required'});
	 return;
   }
   if(!obj.phone){
     res.send({code:404,msg:'phone required'});
	 return; 
  
   } 
   //1.3执行SQL命令
   pool.query('insert into xz_user set?',[obj],(err,result)=>{if (err) throw err;
   console.log(result);
   }) 
  res.send({code:200,msg:'reg suc'});
});
//2.用户登录(post /login)
r.post('/login',(req,res)=>{
   //2.1获取post请求的数据
   let obj=req.body;
   console.log(obj);
   if(!obj.uname){
     res.send({code:401,msg:'uname required'});
     return;
   } 
   if(!obj.upwd){
     res.send({code:402,msg:'upwd required'});
	 return;
   }
   //2.3执行SQL命令
   pool.query('select * from xz_user where uname=? and upwd=?',[obj.uname,obj.upwd],(err,result)=>{if(err) throw err;
   console.log(result); 
   //根据结果判断是否登录成功
   //如果是空数组说明登录失败，否则说明登录成功 
   if (result.length===0){
	 res.send({code:301,msg:'login err'});
    }else{
     res.send({code:200,msg:'login suc'});
    };
   });
})
*/
/*
//3.用户检测
r.get('/checkUser',(req,res)=>{
   //3.1获取查询字符串传递的数据
   let obj=req.query;
   //res.send('OK');
   //console.log(obj);
   //3.2检测是否为空
   if(!obj.uname){
   res.send({code:401,msg:'uname required'});
   return;
   }
   //3.3执行SQL命令
   pool.query('select * from xz_user where uname=?',[obj.uname],(err,result)=>{
	   if(err) throw err;
	   console.log(result);
	   //如果结果是空数组表示没有此用户，可以使用
	   //否则此用户存在，不可用
	   if(result.length===0){
	      res.send({code:200,msg:'可以使用'});
	     }else{
	      res.send({code:201,msg:'该用户已被注册'});
	     }
   });
})
*/

/*
//4.修改用户
r.post('/update',(req,res)=>{
  //4.1获取post请求的数据
  let obj=req.body;
  //console.log(obj);
  //4.2验证各项是否为空
  //批量验证
  let i=400;//初始化变量用于保存状态码
  for(let k in obj){
	i++;
    //console.log(k,obj[k]);
	//如果值为空则提示对应的属性名是必须的
    if(!obj[k]){
	 res.send({code:i,msg:k+' required'});
	 return;
	}
  } 
  //4.3执行SQL命令
  pool.query('update xz_user set? where uid=?',[obj,obj.uid],(err,result)=>
	  {if(err) throw err;
      console.log(result);
	  //结果是对象，如果对象下的affectedRows为0表示修改失败，否则表示修改成功
	    if(result.affectedRows===0){
		  res.send({code:301,msg:'update err'});
		}else{
		  res.send({code:200,msg:'update suc'})};
      });
});
*/


//5.查询数据
r.get('/list',(req,res)=>{
  //5.1获取get请求的数据
  let obj=req.query;
  //5.2检测是否为空
   if(!obj.page){obj.page=1};//默认为第一页;
   if(!obj.data){obj.data=2};//默认每页数据为2;
  //5.3计算开始查询的值
   let start=(obj.page-1)*obj.data;
  //5.4把每页的数据量转为数值型
   let size=parseInt(obj.data);
  //5.5执行SQL命令
  pool.query('select * from xz_user limit ?,?',[start,size],(err,result)=>{
   if(err) throw err;
   res.send(result);
  });
});


/*
//6.删除数据
r.get('/delete',(req,res)=>{
 //6.1获取get请求的数据
 let obj=req.query;
 //console.log(obj);
 //6.2检测数据是否为空
 if(!obj.uid){
   res.send({code:401,msg:'uid required'});
   return;
 }
 //6.3执行SQL命令
 pool.query('delete from xz_user where uid=?',[obj.uid],(err,result)=>{
  if(err) throw err;
  console.log(result);
  //结果为对象，如果对象下的affectedRows属性为0表示删除失败，否则删除成功
  if(result.affectedRows===0){res.send({code:301,msg:'delete err'});
  }else{ res.send({code:200,msg:'delete suc'}) }
 })
});
*/
//导出路由器
module.exports=r;





