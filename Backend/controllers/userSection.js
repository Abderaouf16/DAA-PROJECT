import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import User from '../models/User.js'


// signup the user

export const register = async (req,res)=>{

//   //check if the user exist
//   const emailExixte= await User.findOne({email: req.body.email})
//   if(emailExixte) return res.status(400).send('email exists')

//   //hash passwords

//   const salt = await bcrypt.genSalt(10)
//   const hashedPassword = await bcrypt.hash(req.body.password, salt)
 

//   //create an new user
//   const {username,email,password}= req.body
//   const newUser = new User({username, email,password:hashedPassword})
  
//   const savedUser = await newUser.save()
  

//   try {
//     const token= jwt.sign({_id: newUser._id},process.env.TOKEN_SECRET)
//     res.status(200).send({username:newUser.username, email:newUser.email, token: token})
  
//   } catch (error) {
    
//     res.status(500).json({ error: err.message });
//   }
// }

try {
  //check if the user exist
  const emailExixte= await User.findOne({email: req.body.email})
  if(emailExixte) return res.status(400).json({ msg: "Email already exists " });
  

  //hash passwords

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(req.body.password, salt)
 

  //create an new user
  const {username,email,password}= req.body
  const newUser = new User({username, email,password:hashedPassword})
  
  const savedUser = await newUser.save()
  
    const token= jwt.sign({_id: newUser._id},process.env.TOKEN_SECRET)
    res.status(200).send({username:newUser.username, email:newUser.email, token: token})
} catch (err) {
  res.status(500).json({ error: err.message });
}
}

//login the user

export const loginUser = async (req,res)=>{
  // // check if the email exists
  // const emailExixte= await User.findOne({email: req.body.email})
  // if(!emailExixte) return res.status(400).send('email is wrong')

  // // if password is correct
  // const validPassword = await bcrypt.compare(req.body.password, emailExixte.password)
    
  //   if (!validPassword) {
  //     return res.status(400).send('invalid password')

  //   } else {
  //     // create ans asign a token
  //     const token= jwt.sign({_id: User._id},process.env.TOKEN_SECRET)
  //     res.status(200).send({ email:emailExixte.email, username:emailExixte.username, token: token})
      
  //   }


try {
  const { email, password } = req.body;
  const emailExixte = await User.findOne({ email: req.body.email });
  if (!emailExixte) return res.status(400).json({ msg: "User does not exist. " });

  const isMatch = await bcrypt.compare(req.body.password, emailExixte.password);
  if (!isMatch) return res.status(400).json({ msg: "Invalid credentials. " });

  const token = jwt.sign({ id: User._id }, process.env.TOKEN_SECRET);
  delete User.password;
  res.status(200).send({ email:emailExixte.email, username:emailExixte.username, token: token})
      
} catch (err) {
  res.status(500).json({ error: err.message });
  console.log(err)
}
}
