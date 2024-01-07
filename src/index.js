import dotenv from 'dotenv'
import connectionDb from '../src/db/index.js'
import app from './app.js'


dotenv.config({
    path:'./env'
})

const PORT = process.env.PORT || 8000;
connectionDb()
.then(()=>{
  app.listen(PORT,() => {
    console.log("app is listining on port no:3000");
  })
})
.catch((error)=>{
   console.log(error);
})

app.get("/",(req,res) => {
    res.send("<h1>This is your first Express project</h1>")
})