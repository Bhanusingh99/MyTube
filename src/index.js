import dotenv from 'dotenv'
import connectionDb from '../src/db/index.js'

dotenv.config({
    path:'./env'
})

connectionDb();
