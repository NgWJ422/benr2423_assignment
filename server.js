const express = require('express')
const mongoose = require('mongoose')
const User = require('./models/userschema')
const Other = require('./models/otherschema')
const Additional = require('./models/additionalschema')
const Address = require('./models/addressschema')
const Blacklist = require('./models/blacklistschema')
const Detail = require('./models/detailschema')
const Document = require('./models/docschema')
const Visitor = require('./models/visitorschema')
const Visitation = require('./models/visitationschema')
const { ObjectId } = require('mongodb')
const app = express()

app.use(express.json())

mongoose.connect('mongodb+srv://jng010422:f6c2e57f6bB.@vms.ymnvlkt.mongodb.net/')
.then(()=>{
    console.log('connected to mongodb')
    app.listen(3000,() => {
        console.log('Node Api is running on port 3000')
    })
}).catch((error)=>{
    console.log(error)
})


app.get('/',(req,res)=>{
    res.send('hello node api')
})

app.post('/register', async(req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(200).json(user);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.post('/register/visitor',async(req,res)=>{
    try {
        const visitor = await Visitor.create(req.body)
        await User.updateOne(
            { _id : visitor.user_id },
            {
              $set: { 'visitor_id': visitor._id }
            }
          );
        res.status(200).json(visitor);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.post('/register/visitor/doc',async(req,res)=>{
    try {
        const doc = await Document.create(req.body)
        await Visitor.updateOne(
            { _id : doc.visitor_id },
            {
              $set: { 'doc_type_id': doc._id }
            }
          );
        res.status(200).json(doc);
        

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.post('/register/visitor/address',async(req,res)=>{
    try {
        const address = await Address.create(req.body)
        await Visitor.updateOne(
            { _id : address.visitor_id },
            {
              $set: { 'address_id': address._id }
            }
          );
        res.status(200).json(address);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.post('/register/visitor/other', async(req, res) => {
    try {
        const other = await Other.create(req.body)
        await Visitor.updateOne(
            { _id : other.visitor_id },
            {
              $set: { 'other_id': other._id }
            }
          );
        res.status(200).json(other);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.post('/register/visitor/detail',async(req,res)=>{
    try {
        const detail = await Detail.create(req.body)
        await Visitor.updateOne(
            { _id : detail.visitor_id },
            {
              $push: { 'detail_id': detail._id }
            }
          );
        res.status(200).json(detail);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.post('/register/visitor/visitation',async(req,res)=>{
    try {
        const visitation = await Visitation.create(req.body)
        await Visitor.updateOne(
            { _id : visitation.visitor_id },
            {
              $push: { 'visitation_id': visitation._id }
            }
          );
        await Detail.updateOne(
            { _id : visitation.detail_id },
            {
              $set: { 'visitation_id': visitation._id }
            }
          );
        res.status(200).json(visitation);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.post('/register/visitor/additional',async(req,res)=>{
    try {
        const additional = await Additional.create(req.body)
        await Visitor.updateOne(
            { _id : additional.visitor_id },
            {
              $set: { 'additional_id': additional._id }
            }
          );
        res.status(200).json(additional);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.post('/register/visitor/blacklist',async(req,res)=>{
    try {
        const blacklist = await Blacklist.create(req.body)
        await Visitor.updateOne(
            { _id : blacklist.visitor_id },
            {
              $set: { 'blacklist_id': blacklist._id }
            }
          );
        res.status(200).json(blacklist);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

app.get('/admin/visitor/readall',async(req,res)=>{
  try {
      const allv = await Visitor.find()
      res.status(200).json(allv);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})

app.get('/user/read/:id',async(req,res)=>{
  try {
      const allv = await User.findOne({
        _id : req.params.id
      })
      res.status(200).json(allv);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})

app.get('/visitor/read/:id',async(req,res)=>{
  try {
      const allv = await Visitor.findOne({
        _id : req.params.id
      })
      res.status(200).json(allv);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})

app.get('/document/read/:docid',async(req,res)=>{
  try {
      const allv = await Document.findOne({
        _id : req.params.docid
      })
      res.status(200).json(allv);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})

app.get('/address/read/:addid',async(req,res)=>{
  try {
      const allv = await Address.findOne({
        _id : req.params.addid
      })
      res.status(200).json(allv);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})

app.get('/other/read/:othid',async(req,res)=>{
  try {
      const allv = await Other.findOne({
        _id : req.params.othid
      })
      res.status(200).json(allv);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})

app.get('/additional/read/:addiid',async(req,res)=>{
  try {
      const allv = await Additional.findOne({
        _id : req.params.addiid
      })
      res.status(200).json(allv);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})

app.get('/blacklist/read/:blackid',async(req,res)=>{
  try {
      const allv = await Blacklist.findOne({
        _id : req.params.blackid
      })
      res.status(200).json(allv);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})

app.get('/detail/read/:deid',async(req,res)=>{
  try {
      const allv = await Detail.findOne({
        _id : req.params.deid
      })
      res.status(200).json(allv);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})

app.get('/visitation/read/:viid',async(req,res)=>{
  try {
      const allv = await Visitation.findOne({
        _id : req.params.viid
      })
      res.status(200).json(allv);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})


app.get('/visitation/read/:viid',async(req,res)=>{
  try {
      const allv = await Visitation.findOne({
        _id : req.params.viid
      })
      res.status(200).json(allv);
      
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})

app.get('/visitor/readall/:id',async(req,res)=>{
  try {
    const allv = [
      await Visitor.findOne({_id : req.params.id}),
      await User.findOne({visitor_id: req.params.id}),
      await Document.findOne({visitor_id: req.params.id}),
      await Address.findOne({visitor_id: req.params.id}),
      await Other.findOne({visitor_id: req.params.id}),
      await Additional.findOne({visitor_id: req.params.id}),
      await Blacklist.findOne({visitor_id: req.params.id}),
      detail=[await Detail.find({visitor_id: req.params.id})],
      visitation=[await Visitation.find({visitor_id: req.params.id})]
    ]
    res.status(200).json(allv);
  } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})
  }
})

app.patch('/visitor/update/:id',async(req,res)=>{
  try {
    const updates = req.body
    const allv= await Visitor.updateOne({_id: req.params.id},{$set: updates})
    res.status(200).json(allv);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})


app.patch('/user/update/:id',async(req,res)=>{
  try {
    const updates = req.body
    const allv= await User.updateOne({_id: req.params.id},{$set: updates})
    res.status(200).json(allv);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

app.delete('/visitor/deteleall/:id',async(req,res)=>{
  try {
    const vid = req.params.id
    await Visitor.deleteOne({_id : vid}),
    await User.deleteOne({visitor_id: vid}),
    await Document.deleteOne({visitor_id: vid}),
    await Address.deleteOne({visitor_id: vid}),
    await Other.deleteOne({visitor_id: vid}),
    await Additional.deleteOne({visitor_id: vid}),
    await Blacklist.deleteOne({visitor_id: vid}),
    await Detail.deleteMany({visitor_id: vid}),
    await Visitation.deleteMany({visitor_id: vid})
    .then(result=>{
      res.status(200).json(result)
    })
    .catch(error=>{
      res.status(500).json({message: error.message})
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})