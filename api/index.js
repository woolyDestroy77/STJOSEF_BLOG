import express from 'express'
import mongoos from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();

mongoos
    .connect(process.env.MONGO)
    .then(() => {
        console.log('MongoDb is connected')
    })
    .catch(err => {
        console.log(err)
    })

const app = express();

app.listen(3000, () => {
    console.log('Server is running on port 3000!!');
});