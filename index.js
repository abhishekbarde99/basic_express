const express= require('express')
const bodyParser= require('body-parser')
const app=express();
const port=3000
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("welcome to my channel ")
})
app.get("/calculator",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
});
app.post("/calculator",(req,res) =>{
    //console.log(req.body)
    let n1=Number(req.body.v1)
    let n2=Number(req.body.v2)
    let sum=n1+n2
    res.send("the of two number is = "+ sum);
});
app.get("/bmi",(req,res)=>{
    res.sendFile(__dirname+"/bmi.html")
});
app.post("/bmi",(req,res) =>{
    //console.log(req.body)
    let w1=Number(req.body.weight)
    let h1=Number(req.body.height)
    let sum=w1/(h1*h1)
    res.send("the of two number is = "+ sum);
});


app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})
