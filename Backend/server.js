const express=require('express');
const app=express();
const mongoose=require('mongoose');
const User=require('./Model/user');
const userRouter=require('./router/user');
const fundRouter=require('./router/transactions');
const transactionRouter=require('./router/transactions');
const Transaction=require('./Model/transaction');
const cookieParser = require("cookie-parser");
const port=3000;


app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());




app.get('/',(req,res)=>{
    res.send('Hello World');
}
);

mongoose
.connect("mongodb://localhost:27017/DhanRakshak")
.then((e) => console.log("DB Connected"))
.catch((e) => console.log("DB Error: ", e));



app.use("/user",userRouter);
app.use("/transaction",transactionRouter);
app.use("/fund",fundRouter);

app.post("/sendMoney",async(req,res)=>{
    const {reciverId,senderId,amount,description,goalName,}=req.body;
    await User.findByIdAndUpdate(name,{$push:{transactionHistory:{senderId,amount,reciverId}}});
    await User.findByIdAndUpdate()
})



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}
);