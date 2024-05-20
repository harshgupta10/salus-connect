import express from 'express'
import connectDB from './server/mongoose.js'
const app = express()
const port = process.env.PORT || 3000
import authRouter from './routes/signup.js'

connectDB()

app.get('/',(req,res)=>{
    res.send('Welcome to salus connect!')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/',authRouter)

app.listen(port, ()=>{
    console.log(`server started at ${port}`)
})