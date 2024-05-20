import mongoose from 'mongoose'

const url = 'mongodb://localhost:27017/salus-connect'

const connnectDB = async () =>{
    try {
        await mongoose.connect(url)

        console.log('Db connected successfully!')
    } catch(error){
        console.log(error)
    }
}

export default connnectDB