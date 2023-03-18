const express = require(`express`)
const mysql = require(`mysql`)
const cors = require(`cors`)
const port = 3000

const app = express()

app.use(cors())

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "głosowanie"
})
con.connect(function(err){
    if(err) console.log(err)
    else console.log("połączono z bazą danych")
})
app.listen(port)