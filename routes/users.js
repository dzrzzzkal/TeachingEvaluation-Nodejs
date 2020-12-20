var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  res.json({"result":[{"legend":"18 行政服务中心","year":"2018","xAxis":"2","yAxis":"5"},{"legend":"18 行政服务中心","year":"2018","xAxis":"1","yAxis":"52"}],"resultCode":"0","resultMsg":"查询请求响应成功"});
  // res.send('a');
});

module.exports = router;
