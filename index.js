// impost express
const express = require('express'); // backend me ais hi import krte h unlike react 
const userRouter=require('./routers/userRouter');
const productRouter=require('./routers/productRouter');
const cors = require('cors');

// initialize express
const app=express();
const port= 5000;

//middleware: request aane pe uska data access kr skte h, modify krte h lekin response nhi generate kr skte h routes ki trh
app.use(express.json());  

app.use(cors({
    origin:['http://localhost:3000']
}));

app.use('/user', userRouter);
app.use('/earbuds', productRouter);

//routes-request aane pe response generate krte h
app.get('/', (req , res)=>{
    res.send('response from express')
});

app.get('/home', (req , res)=>{
    res.send('Welcome to home')
});
app.get('/add', (req , res)=>{
    res.send('Wanna Add something')
});

app.get('/getall', (req , res)=>{
    res.send('response from getall')
});

app.get('/getbyid', (req , res)=>{
    res.send('response from getbyid')
});

app.get('/update', (req , res)=>{
    res.send('response from update')
});

app.get('/delete', (req , res)=>{
    res.send('response from delete')
});

app.listen(port, ()=>{
    console.log('server started')
});
