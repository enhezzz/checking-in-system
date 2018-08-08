const express = require('express');
const app = express();
const axios = require('axios')
app.get('/user/login',(req,res)=>{
    res.json({
        username: 'enhezzz'
    }).end()
})
app.get('/zc/list',(req,res)=>{
    res.send([
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
      ]).end()
});
app.get('/zc/qd',(req,res)=>{
    res.s
})
app.listen(80,'localhost',()=>{
    console.log('listening 80 port')
})