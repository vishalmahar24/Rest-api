var express = require('express');

var uuid = require('uuid');

var mysql = require('./mysql');
const router = express.Router();


router.get('/',(req,res)=>{
    mysql.query("select * from bookmarks",(err,result)=>{
        if(err){
            res.send(err);
        }
        else res.send(result);
    })
})

router.post('/',(req,res)=>{
   
    
    data={Id : uuid.v1(), Link : req.body.Link, Title : req.body.Title, Publisher : req.body.Publisher};

    sql="insert into bookmarks SET ?";
    mysql.query(sql,data,(err,result)=>{
        if(err){
            res.send(err);
        }
        else {
            res.send({
                'message' : "successfully added"
            })
        }
    })

})
router.delete('/:Id',(req,res)=>{
    
    sql = "delete from bookmarks where Id = '"+req.params.Id+"'";
    mysql.query(sql,(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send({
                'message' : "successfully deleted bookmark"
            })
        }
    })
})

module.exports = router;
