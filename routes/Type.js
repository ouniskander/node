var express = require('express');
var router = express.Router();


var db=require('../models');


router.post('/add',(req,res)=>{
  db.Type.create(req.body).then(
    (r)=>{
      res.send(r)
    }
  ).catch((e)=>{res.send(e)})
})

router.get('/fetch', function(req, res, next) {
  db.Type.findAll().then((resp)=>{
    res.send(resp)
  })
});
 
router.delete('/remove/:id',(req,res)=>{
db.Type.destroy({where:{id:req.params.id}}).then(
  ()=>{
    res.send('removed')
  }
)
})
router.put('/update/:id',(req,res)=>{
  db.Type.update(req.body,{where:{id:req.params.id}}).then(
    ()=>{
      res.send('updated')
    }
  )
  })
router.get('/detail/:id', function(req, res, next) {
  db.Type.findOne({where:{id:req.params.id}}).then((resp)=>{
    res.send(resp)
  })
});

module.exports = router;