const express=require('express');
//引入body-parser中间件
const bodyParser=require('body-parser');
//引入用户路由器
const userRouter=require('./router/user.js');
const ajaxRouter=require('./router/ajax.js');
const proRouter=require('./router/pro.js');
//console.log(userRouter); 
//创建web服务器
const app=express();
//设置端口
app.listen(8080);

//托管静态资源到public目录
app.use(express.static('./public'));
//应用body-parser中间件，将请求的数据解析为对象
app.use( bodyParser.urlencoded({
 extended:false
}));
//挂载路由器到web服务器，添加前缀/user，放在最后
//路由URL变成添加/user  /user/reg 
app.use('/user',userRouter);
app.use('/ajax',ajaxRouter);
app.use('/pro',proRouter);