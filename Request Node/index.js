const express=require("express")
const app=express();
const path=require("path")
   
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render('form');
})
app.get("/cat", (req, res) => {

    const{username,age}=req.query;
     res.render('show',{username,age});
})

app.post("/cat", (req, res) => {
    console.log(req.body);
    const { username, age } = req.body;
    res.render('show',{username,age})
})

app.listen(3000,()=>
{
console.log("Server Started")
})