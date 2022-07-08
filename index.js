const express=require('express')
//console.log('Aman')

//syntax of express
const app=express()


// if client want to move to / then return this data
app.get("/",(req,res)=>{
    res.send("Hi Aman!")
});

// if client move to home address then return this data
// app.get("/Home",(req,res)=>{
//     res.send("You are in class Now at all")
// })

// from line 19 to 23 , this is used for routes like if we want to move to a diff address then we can make request and return data.
// the synatx for any id is app.get("/home/:id" , (req,res)=>{}) 
// also this '${req.params.id' is the method to write html in express 
app.get("/Home/:name", (req,res)=>{
   // console.log(req.params)
    res.send(`you are in ${req.params.name} class Now`)
});
app.listen(3000,()=>{
    console.log("Server is Started");
})
