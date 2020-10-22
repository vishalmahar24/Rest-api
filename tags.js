var express = require('express');

var uuid = require('uuid');

var mysql = require('./mysql');
const router = express.Router();


router.get('/',(req,res)=>{
    mysql.query("select * from tags",(err,result)=>{
        if(err){
            res.send(err);
        }
        else res.send(result);
    })
})

router.post('/',(req,res)=>{
    
    data={Id : uuid.v1(), Title : req.body.Title};

    sql="insert into tags SET ?";
    mysql.query(sql,data,(err,result)=>{
        if(err){
            res.send(err);
        }
        else {
            res.send({
                'message' : "successfully added tag"
            })
        }
    })

})

router.delete('/:Id',(req,res)=>{
    
    sql = "delete from tags where Id = '"+req.params.Id+"'";
    mysql.query(sql,(err,result)=>{
        if(err){
            res.send(err);
        }
        else{
            res.send({
                'message' : "successfully deleted tag"
            })
        }
    })
})

module.exports = router;