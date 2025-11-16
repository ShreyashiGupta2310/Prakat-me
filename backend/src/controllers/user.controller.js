import httpStatus from "http-status";
import {User} from "../models/users.models.js";
import bcrypt ,{hash} from "bcrypt";
import crypto from "crypto";
const login = async (req ,res)=>{

    const {username,password} = req.body;
if(!username ||  !password){
    return res.status(400).json({message: "please provide username  /  password"});
}
    
try{
    const user = await User.findOne({username});
    if(!user){
        return res.status(httpStatus.NOT_FOUND).json({message:"user not found"});
    }
    if(bcrypt.compare(password , user.password)){
     
        let token = crypto.randomBytes(20).toString("hex");

        user.token=token;
        await user.save();
        return res.status(httpStatus.OK).json({token : token});
    }

    }catch(e){

        res.Status(500).json({message:`something went wrong ${e}`});

    }
}
const register = async (req,res)=>{
    const {name ,username ,password}=req.body;

    try{
const exsistingUser = await User.findOne({username});
if(exsistingUser){
    return res.status(httpStatus.FOUND).json({message:"User already exist"});
    
}
const hashedPassword = await bcrypt.hash(password ,10);

const newUser =new User(
    {
        name:name,
        username:username,
        password:hashedPassword
    }
);
await newUser.save();
res.status(httpStatus.CREATED).json({message:"User Registered"})
    }
    catch(e){
res.json({message:`Something went worng ${e}`});
    }
};

const getUserHistory = async(req,res)=>{
    const {token}=req.query;
    try{
        const user = await User.findOne({token :token});
        const meetings = await meetings.find({user_id: user.username});
        res.json(meetings)
    }catch(e){
        res.json({message : `Something went wrong ${e}`})
    }
    
}

const addToHistory = async(req ,res)=>{
    const {token , meeting_code}=req.body;

    try{
        const user = await User.findOne({token :token});
        const newMeeting = new Meeting({
            user_id:user.username,
            meetingCode:meeting_code
        })

        await newMeeting.save();
        res.status(httpStatus.CREATED).json({message:`Added to history`});
    }catch(e){
res.json({message:`Something went wrong ${e}`});
    }
};


export {login , register ,getUserHistory , addToHistory};