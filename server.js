require('dotenv').config()
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
const jwt = require('jsonwebtoken')
const app = express()

app.use(express.json())



mongoose.connect('mongodb+srv://jng010422:f6c2e57f6bB.@vms.ymnvlkt.mongodb.net/vms')
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

//user registration
app.post('/register', async(req, res) => {
    try {
        const a = await User.findOne({'username':req.body.username})
        if(a == null){
          const user = await User.create(req.body)
          res.status(200).json(user)}
        else{
          res.send('username has been taken')
        }        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//user login
app.post('/login',async(req,res)=>{
  const {username,password}=req.body
  try {
    const b = await User.findOne({username:req.body.username})
    if(b==null){
      res.send('username not found')
    }else{
      if(b.login_status=="login"){
        res.send("user has login")
      }else{
      const c = await User.findOne({'username':req.body.username,'password':req.body.password})
      if(c==null){
        res.send('wrong password')
      }else{
        await User.updateOne({username:req.body.username},{$set:{login_status:'login'}})
        const login_user= await User.findOne({username:req.body.username})
        access_token=jwt.sign({user_id:login_user._id,role:login_user.role},process.env.Access_token_secret)
        console.log('login successful')
        res.json({accesstoken: access_token})
      }
      }
      }}
   catch (error) {
    console.log(error.message);
        res.status(500).json({message: error.message})
  }
})

//middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, login_user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = login_user
    next()
  })
}

//test jwt
app.get('/showjwt',authenticateToken,(req,res)=>{
  res.send(req.user)
})

//user logout(cannot interact with api after log out)
app.patch('/logout',async(req,res)=>{
  try {
    const a = await User.findOne({username:req.body.username})
    if(a.login_status!="login"){
      res.send("user has logout")
    }else{
      await User.updateOne({username:req.body.username},{$set:{login_status:"logout"}})
      const z = await User.findOne({username:req.body.username})
      res.send("successfully logout")
    }
    
  } catch (error) {
    console.log(error.message);
    res.status(500).json({message: error.message})
  }
})

//admin security or visitor insert visitor info(1 user account only 1 visitor)
app.post('/register/visitor',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
    if(a.visitor_id != null){
      res.send('visitor has been created for this user(1 user 1 visitor)')
    }else{
    try {
        const visitor = await Visitor.create(req.body)
        const z= await Blacklist.create({blacklist_status:"no",visitor_id: visitor._id})
        await Visitor.updateOne({
          _id: visitor._id
        },
        {
          $set: { 'user_id': req.user.user_id,
                  'blacklist_id': z._id }
        })
        await User.updateOne(
            { _id : req.user.user_id },
            {
              $set: { 'visitor_id': visitor._id }
            }
          );
        const v2 = await Visitor.findOne({_id: visitor._id})
        res.status(200).json(v2);
        console.log(z)
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }}
  }else{
    res.send('please login')
  }
})


app.post('/register/visitor/doc',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
       try {
          const doc = await Document.create(req.body)
          const b = await Visitor.findOne({ user_id : req.user.user_id })
          await Visitor.updateOne(
          { _id : b._id },
          {
            $set: { 'doc_type_id': doc._id }
          }
        );
        await Document.updateOne(
            { _id : doc._id },
            {
              $set: { 'visitor_id': b._id }
            }
          );
        const c = await Document.findOne({_id: doc._id})
        res.status(200).json(c);
          
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
  }else{
    res.send('please login')
  }
})


app.post('/register/visitor/address',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
    try {
      const add = await Address.create(req.body)
      const b = await Visitor.findOne({ user_id : req.user.user_id })
      await Visitor.updateOne(
          { _id : b._id },
          {
            $set: { 'address_id': add._id }
          }
        );
        await Address.updateOne(
            { _id : add._id },
            {
              $set: { 'visitor_id': b._id }
            }
          );
        const c = await Address.findOne({_id: add._id})
        res.status(200).json(c);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
  }else{
    res.send('please login')
  }
})

app.post('/register/visitor/other',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
    try {
      const oth = await Other.create(req.body)
      const b = await Visitor.findOne({ user_id : req.user.user_id })
      await Visitor.updateOne(
          { _id : b._id },
          {
            $set: { 'other_id': oth._id }
          }
        );
        await Other.updateOne(
            { _id : oth._id },
            {
              $set: { 'visitor_id': b._id }
            }
          );
        const c = await Other.findOne({_id: oth._id})
        res.status(200).json(c);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
  }else{
    res.send('please login')
  }
})

app.post('/register/visitor/additional',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
    try {
      const add = await Additional.create(req.body)
      const b = await Visitor.findOne({ user_id : req.user.user_id })
      await Visitor.updateOne(
          { _id : b._id },
          {
            $set: { 'additional_id': add._id }
          }
        );
        await Additional.updateOne(
            { _id : add._id },
            {
              $set: { 'visitor_id': b._id }
            }
          );
        const c = await Additional.findOne({_id: add._id})
        res.status(200).json(c);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
  }else{
    res.send('please login')
  }
})



app.post('/register/visitor/detail',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
    try {
      const detail = await Detail.create(req.body)
      const b = await Visitor.findOne({ user_id : req.user.user_id })
      await Visitor.updateOne(
          { _id : b._id },
          {
              $push: { 'detail_id': detail._id }
          }
        );
        await Detail.updateOne(
            { _id : detail._id },
            {
              $set: { 'visitor_id': b._id }
            }
          );
        const c = await Detail.findOne({_id: detail._id})
        res.status(200).json(c);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
  }else{
    res.send('please login')
  }
})

app.post('/register/visitor/visitation',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
    try {
      const visitation = await Visitation.create(req.body)
      const b = await Visitor.findOne({ user_id : req.user.user_id })
      await Visitor.updateOne(
          { _id : b._id },
          {
              $push: { 'visitation_id': visitation._id }
          }
        );
        await Visitation.updateOne(
            { _id : visitation._id },
            {
              $set: { 'visitor_id': b._id }
            }
          );
          await Detail.updateOne(
            { _id : req.body.detail_id },
            {
              $set: { 'visitation_id': visitation._id }
            }
          );
        const c = await Visitation.findOne({_id: visitation._id})
        res.status(200).json(c);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
  }else{
    res.send('please login')
  }
})

//admin and security read data from database by inserting their own criteria
app.post('/security/user/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' || req.user.role=='security'){
      const allv = await User.find(req.body)
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin nor security)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.post('/security/visitor/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' || req.user.role=='security'){
      const allv = await Visitor.find(req.body)
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin nor security)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.post('/security/doc/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' || req.user.role=='security'){
      const allv = await Document.find(req.body)
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin nor security)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.post('/security/address/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' || req.user.role=='security'){
      const allv = await Address.find(req.body)
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin nor security)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.post('/security/other/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' || req.user.role=='security'){
      const allv = await Other.find(req.body)
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin nor security)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.post('/security/additional/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' || req.user.role=='security'){
      const allv = await Additional.find(req.body)
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin nor security)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.post('/security/blacklist/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' || req.user.role=='security'){
      const allv = await Blacklist.find(req.body)
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin nor security)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.post('/security/detail/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' || req.user.role=='security'){
      const allv = await Detail.find(req.body)
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin nor security)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.post('/security/visitation/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' || req.user.role=='security'){
      const allv = await Visitation.find(req.body)
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin nor security)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})


//admin and security need to specified which doc they want to update in the url
//the following can only be edited by admin
app.patch('/security/user/update/:id',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' ){
      const allv= await User.updateOne({_id: req.params.id},{$set: req.body})
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin )')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.patch('/security/visitor/update/:id',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' ){
      const allv= await Visitor.updateOne({_id: req.params.id},{$set: req.body})
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.patch('/security/doc/update/:id',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' ){
      const allv= await Document.updateOne({_id: req.params.id},{$set: req.body})
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.patch('/security/address/update/:id',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin'){
      const allv= await Address.updateOne({_id: req.params.id},{$set: req.body})
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.patch('/security/other/update/:id',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin'){
      const allv= await Other.updateOne({_id: req.params.id},{$set: req.body})
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.patch('/security/additional/update/:id',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin'){
      const allv= await Additional.updateOne({_id: req.params.id},{$set: req.body})
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

//the following can be updated by admin or security
//eg:only admin and security can blacklist visiter by blacklist
app.patch('/security/blacklist/update/:id',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' || req.user.role=='security'){
      const allv= await Blacklist.updateOne({_id: req.params.id},{$set: req.body})
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin nor security)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.patch('/security/detail/update/:id',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' || req.user.role=='security'){
      const allv= await Detail.updateOne({_id: req.params.id},{$set: req.body})
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin nor security)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.patch('/security/visitation/update/:id',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' || req.user.role=='security'){
      const allv= await Visitation.updateOne({_id: req.params.id},{$set: req.body})
      res.status(200).json(allv);
    }else{
      res.send('you have no permission(not admin nor security)')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

//admin wants to delete a visitor information
//after delete user can create new visitor profile
app.delete('/admin/visitor/deleteall/:id',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
    if(req.user.role=='admin' ){
      const vid = req.params.id
      await User.updateOne({visitor_id:vid},{$unset: {visitor_id: ""}})
      await Visitor.deleteMany({_id : vid}),
      await Document.deleteOne({visitor_id: vid}),
      await Address.deleteMany({visitor_id: vid}),
      await Other.deleteMany({visitor_id: vid}),
      await Additional.deleteMany({visitor_id: vid}),
      await Blacklist.deleteMany({visitor_id: vid}),
      await Detail.deleteMany({visitor_id: vid}),
      await Visitation.deleteMany({visitor_id: vid})
      .then(result=>{
      res.status(200).json(result)
       })
    }else{
      res.send('you have no permission(not admin )')
    }
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})


app.delete('/admin/user/delete/:id',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  
  if(a.login_status=='login'){
        try {
          if(req.user.role=='admin' ){
            const vid = req.params.id
            await User.deleteMany({_id : vid})
            .then(result=>{
            res.status(200).json(result)
            })
          }else{
            res.send('you have no permission(not admin )')
          }
          } catch (error) {
            console.log(error.message);
            res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

//the following are read api for visitor or anyone to read their own visitor record

app.get('/user/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
      const allv = await User.find({visitor_id:a.visitor_id})
      res.status(200).json(allv);
   
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.get('/visitor/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
      const allv = await Visitor.find({_id:a.visitor_id})
      res.status(200).json(allv);
    
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.get('/doc/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
      const allv = await Document.find({visitor_id:a.visitor_id})
      res.status(200).json(allv);
   
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.get('/address/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
      const allv = await Address.find({visitor_id:a.visitor_id})
      res.status(200).json(allv);
    
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.get('/other/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
      const allv = await Other.find({visitor_id:a.visitor_id})
      res.status(200).json(allv);
    
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.get('/additional/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
      const allv = await Additional.find({visitor_id:a.visitor_id})
      res.status(200).json(allv);
    
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.get('/blacklist/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
      const allv = await Blacklist.find({visitor_id:a.visitor_id})
      res.status(200).json(allv);
    
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.get('/detail/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
      const allv = await Detail.find({visitor_id:a.visitor_id})
      res.status(200).json(allv);
    
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})

app.get('/visitation/read',authenticateToken,async(req,res)=>{
  const a = await User.findOne({_id:req.user.user_id})
  if(a.login_status=='login'){
  try {
      const allv = await Visitation.find({visitor_id:a.visitor_id})
      res.status(200).json(allv);
    
    } catch (error) {
      console.log(error.message);
      res.status(500).json({message: error.message})}
  }else{
    res.send('please login')
  }
})
