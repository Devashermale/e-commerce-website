const jwt = require('jsonwebtoken')
const User = require('../model/usermodel')
const Auth = (req, res, next) => {
    const Authrization = req.headers;
    if (!Authrization) {
        return res.status(401).json({err:"Authentication is required"})
    }
   const token = Authrization.split(' ')
  try {
    const{_id} =jwt.verify(token,process.env.JWT_SECRET)
   req.user =User.findOne({_id}).select({_id})
   if (!req.user) {
    return res.status(401).json({error:"user no longer exits"})
   }
  } catch (error) {
    console.log({error:error.message})
 res.status(401).json({ error: 'Request is not authorized' });

  }

}