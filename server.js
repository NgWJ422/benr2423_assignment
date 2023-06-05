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
              $set: { 'doc_type': doc._id }
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

