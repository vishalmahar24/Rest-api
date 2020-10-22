var express = require('express');

var mysql = require('./mysql');
const router = express.Router();


router.post('/',(req,res)=>{
   
    
    data={Bookmark_Id : req.body.Bookmark_Id,Tag_id : req.body.Tag_id};

    sql="insert into connection SET ?";
    
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

    sql = "delete from connection where Bookmark_Id = '"+req.params.Id+"' AND Tag_id = '"+req.query.Tag_id+"'";
    mysql.query(sql,(err,result)=>{
        
        if(err){
            res.send(err);
        }
        else{
            res.send({
                'message' : "tag deleted successfully"
            })
        }
    })
})


module.exports = router;
