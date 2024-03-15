const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const eventRouter = require('./routes/event')

const connectDb =async() =>{
    try{
        await mongoose.connect('mongodb+srv://vanquang:1234567890@webblog.ybxxmbt.mongodb.net/webblog?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDB connected')
    }
    catch(error){
        console.log(error.message)
        process.exit(1)
    }
}

connectDb()
const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/event',eventRouter)


const port = 5000

app.listen(port, () => console.log(`Server stated on port ${port}!`))