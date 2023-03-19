const express = require(`express`)
const mysql = require(`mysql`)
const cors = require(`cors`)
const port = 3000
const app = express()

app.use(cors())

var con = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
    database:'glosowanie'
})
con.connect(function(err){
    if(err) console.log(err)
    else console.log("połączono z bazą danych")
})
app.get("/add/:pesel/:kandydat",(req,res)=>{
    const pesel = req.params.pesel
    const kandydat = req.params.kandydat
    const sql = `INSERT INTO glosowanie (pesel,kandydat) VALUES('${pesel}','${kandydat}')`
    con.query(sql,(err,result,fields)=>{
        if(err) console.log(err)
        else res.send(result)
    })
})
app.get("/select",(req,res)=>{
    const sql = `SELECT * FROM glosowanie`
    con.query(sql,(err,result,fields)=>{
        if(err) console.log(err)
        else res.send(result)
    })
})


app.listen(port,()=>{
    console.log("aplikacja działa na porcie: " + port)
})