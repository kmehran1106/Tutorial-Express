const express = require('express')

const app = express()

app.listen(8500, ()=>console.log("Server is running at PORT 8500!"))

app.get('/api',(req,res)=>{
res.send('API online')
})
