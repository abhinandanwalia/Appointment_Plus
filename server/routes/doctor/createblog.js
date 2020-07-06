var con = require('../../database/DBConfig').con;
var express = require('express');
var router = express.Router();
var query="";
router.post('/', function(req, res, next) {
    con.getConnection(function(err) {
        console.log("connected");
     if(err){
       res.send(500,"SQL Error");
     }
     else{
       
    con.query("insert into appointmentplus.blogs (Title,image,Description) values('"+req.body.blogTitle+"','"+ req.body.blogImage+"','"+req.body.blogDescription +"')", function (err, result, fields) {
       if(err){
       res.send(500,"Query error");
       console.log(err);
       }else{
       console.log("connected1");
       //console.log(result);
       return res.status(200).send({message:"success"});
       }
       
     });
     }
   });
    
});

router.get('/getblogs/:blogId', function(req, res, next) {
  console.log(req.params.blogId);
    con.getConnection(function(err) {
        console.log("connected");
     if(err){
       res.send(500,"SQL Error");
     }
     else{
      if(req.params.blogId == 0){
        query = "select * from appointmentplus.blogs";
      }
      else{
        query ="select * from appointmentplus.blogs where Blogid="+req.params.blogId;
      }
    con.query(query, function (err, result, fields) {
       if(err){
       res.send(500,"Query error");
       console.log(err);
       }else{
       console.log("connected1");
       //console.log(result);
       return res.status(200).send({message:result});
       }
       
     });
     }
   });
});
module.exports = router;