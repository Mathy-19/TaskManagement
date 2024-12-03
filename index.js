const express = require('express');
const cors=require("cors")
const mysql=require("mysql")
const app = express();
app.use(cors())
app.use(express.json());

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:" ",
    database:"management",
    port:"3307"
    
})
console.log("sucess")
const PORT = 8081;

app.get("/api/get",(req,res)=>{
    const sqlGet="SELECT * FROM task1";
    db.query(sqlGet,(err,result)=>{
        if (err) {
            return res.status(500).json({ err: ' fetching error' });
          }
        res.json(result);
    })
})

app.post('/api/post',(req,res)=>{
    const {title,description,duedate,status}=req.body;
    const sqlInsert="INSERT INTO task1 (title,description,duedate,status) VALUES(?,?,?,?)";
    db.query(sqlInsert,[title,description,duedate,status],(err,result)=>{
        if(err){
            console.log(err)
        }
    
    })

})

app.delete('/api/remove/:id',(req,res)=>{
    const {id}=req.params;
    const sqlRemove="DELETE FROM task1 WHERE id=?";
    db.query(sqlRemove,id,(err,result)=>{
        if(err){
            console.log(err)
        }
    
    })
})

app.get("/api/get/:id",(req,res)=>{
    const {id}=req.params;
    const sqlGet="SELECT * FROM task1  WHERE id=?";
    db.query(sqlGet,id,(err,result)=>{
        if (err) {
            console.log(err)
          }
        res.json(result);
    })
})
app.put("/api/update/:id",(req,res)=>{
    const {id}=req.params;
    const{title,description,duedate,status}=req.body;
    const sqlUpdate="UPDATE task1 SET title=?,description=?,duedate=?,status=? WHERE id=?";
    db.query(sqlUpdate,[title,description,duedate,status,id],(err,result)=>{
        if (err) {
            console.log(err)
          }
        res.json(result);
    })
})

app.get('/', (req, res) => {
  
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);

});