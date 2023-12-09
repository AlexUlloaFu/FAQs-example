const express = require('express')
const cors = require('cors')
const app = express()
const port = "3001"

const faqs = require("./faqs.json")

app.use(express.json());
app.use(cors())

app.get('/',(req,res) => {
    res.json(faqs) 
})

app.listen(3001, () => {
    console.log(`listening at port ${port}`)
})