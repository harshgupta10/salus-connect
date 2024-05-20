import express from 'express'
import bcrypt from 'bcrypt'
import User from '../server/models/user.js'

const SALT_ROUNDS = 10;

// User.pre('save', async function (next){
//     if(this.isNew || this.isModified('password')){
//         this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
//     }
//     next()
// })

const router = express.Router()

router.post('/signup', async (req,res)=>{
    try{
        const {name,employeeId,password}=req.body

        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
        const newUser = new User({name,employeeId,password:hashedPassword})
        await newUser.save()

        res.json({ message: 'User created successfully!'})
    }

    catch(err){
        console.log(err)
        res.status(500).json({message: 'Error creating user'})
    }
})

export default router