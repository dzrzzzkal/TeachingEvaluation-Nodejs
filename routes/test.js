var express = require('express');
var router = express.Router();
var data = {
  'code':0,
  'message':'success',
  'version':{
      "versionCode":"1.0.1",
      "versionName":"机遇"
  }
};
router.get('/', function(req, res, next) {
  res.send(data);
});
module.exports = router;
