import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost:27017/SecondBrain")

const userSchema =  new mongoose.Schema({
    username : {type: String, unique:true},
    password : String
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;