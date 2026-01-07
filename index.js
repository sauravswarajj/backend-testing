require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/twitter", (req, res)=> {
    res.send("sauravswaraj.com")
})

app.get("/login", (req, res)=> {
    res.send("Welcome to Login Page")
})

app.get("/youtube", (req, res)=>{
    res.send("<h2>Saurav Youtube Channel</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
