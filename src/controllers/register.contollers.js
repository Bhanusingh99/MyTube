import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async(req,res)=>{

     //get users details from foentend
     const {username,email,password,fullname} = req.body;

     //Validate not empty
})

export {registerUser}