import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Please provide your name'],
        minlength: [3, 'Name must be at least 3 characters long'],
        maxlength: [50, 'Name must not exceed 50 characters'],
    },
    age: {type: Number, required: [true, 'Please inter your age']},
    email: {type: String, required: [true, 'Please provide your email'], unique:true,
        validate:{
            validator: function (value:string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message:'{VALUE} is Invalid email address format',
        }
    },
    photo:  String,
    role: {
        type: String, 
        enum:{
            values:['user', 'admin'],
            message:'{VALUE} is not valid, please provide a valid role'
        },
        required: true},
    userStatus: {
        type: String,
        enum:{
            values:['active', 'inActive'],
            message:'{VALUE} is not valid, please provide a valid user status'
        }, 
        required: true}

});

const User = model('User', userSchema);
export default User;