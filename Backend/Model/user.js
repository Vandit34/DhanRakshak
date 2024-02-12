const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true
    },
    role:{
        type:String,
        enum:["PM","CM","MLA","CONTRACTOR","USER"],
        default:"USER"
    },
    publicViewId:{
        type:String,
    },
    transactionAddress:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    goal: [{ 
        goalName:{
            type:String,
            required:true
        },
        amount:{
            type:Number,
            required:true   
        },
        category:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
    }],
    transactionHistory:[{
        senderId:{
            type:String,
            required:true
        },
        receiverId:{
            type:String,
            required:true
        },
        amount:{
            type:Number,
            required:true
        },
    }]
});

const User = mongoose.model("User", userSchema);
module.exports = User;