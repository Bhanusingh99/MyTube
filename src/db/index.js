import { DB_NAME } from "../constant.js";
import mongoose from "mongoose";

const connectionDb = async () => {
    try {
        await mongoose.connect(`${process.env.MONOGODB_URI}/${DB_NAME}`);
        console.log('MongoDb is connected !!')
    } catch (error) {
        console.log('Failed to connect');
        process.exit(1)
    }
} 

export default connectionDb;