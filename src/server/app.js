const express = require('express');
const app = express();
const axios = require('axios')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.get('/user/login',(req,res)=>{
    res.json({
        username: 'enhezzz'
    }).end()
})
app.get('/activity/:type?',(req,res)=>{
    let type = req.params.type;
    let resObj;
    if(type == undefined){
        resObj = {
            data: [
                {
                  date: "2016-05-02",
                  name: "王小虎",
                  available: "YES"
                },
                {
                  date: "2016-05-04",
                  name: "王小虎",
                  available: "YES"
                },
                {
                  date: "2016-05-01",
                  name: "王小虎",
                  available: "NO"
                },
                {
                  date: "2016-05-03",
                  name: "王小虎",
                  available: "YES"
                }
              ],
              msg: '已签到'
        }
        res.send(resObj).end()
    }else if(type == 'club'){
        resObj = {
            data: [
                {
                  date: "2016-05-02",
                  name: "王小",
                  available: "YES"
                },
                {
                  date: "2016-05-04",
                  name: "王小",
                  available: "YES"
                },
                {
                  date: "2016-05-01",
                  name: "王小",
                  available: "NO"
                },
                {
                  date: "2016-05-03",
                  name: "王小",
                  available: "YES"
                }
              ],
              msg: '再次签到'
        }
        res.send(resObj).end()
    }else if(type == 'body'){
        resObj = {
            data: [
                {
                  date: "2016-05-02",
                  name: "王",
                  available: "YES"
                },
                {
                  date: "2016-05-04",
                  name: "王",
                  available: "YES"
                },
                {
                  date: "2016-05-01",
                  name: "王",
                  available: "NO"
                },
                {
                  date: "2016-05-03",
                  name: "王",
                  available: "YES"
                }
              ],
              msg: '再次签到'
        }
        res.send(resObj).end()
    }else if(type == 'exercise'){
        resObj = {
            data: [
                {
                  date: "2016-05-02",
                  name: "小虎",
                  available: "YES"
                },
                {
                  date: "2016-05-04",
                  name: "小虎",
                  available: "YES"
                },
                {
                  date: "2016-05-01",
                  name: "小虎",
                  available: "NO"
                },
                {
                  date: "2016-05-03",
                  name: "小虎",
                  available: "YES"
                }
              ],
              msg: '再次签到'
        }
        res.send(resObj).end()
    }
  
});
app.post('/activity/:type?',(req,res)=>{
    let type = req.params.type;
    if(type == undefined){
      res.json({msg: '已签到'}).end()
    }else{
      res.json({msg: '再次签到'}).end()
    }
})
app.get('/status',(req,res)=>{
  res.json({
    currentStatus: 1,
    time: ''
  }).end()
})
app.listen(80,'localhost',()=>{
    console.log('listening 80 port')
})