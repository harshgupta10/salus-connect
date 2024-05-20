import mongoose from 'mongoose'
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    
    employeeId:{
        type: Number,
        required: true,
        unique: true
    },
    
    password:{
        type: String,
        required: true
    }
})

const SALT_ROUNDS = 10;


userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
    }
    next();
});

const User = mongoose.model('User',userSchema)
export default User