import React, { useContext ,useState } from "react";
import withAuth from "../utils/withAuth";
import { Navigate, useNavigate } from "react-router-dom";
import "../myApp.css";
import {Button, IconButton, TextField } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { AuthContext } from "../contexts/AuthContext";





function HomeComponent(){


let navigate = useNavigate();
const [meetingCode , setMeetingCode] = useState("");

const {addToHistory} = useContext(AuthContext);
console.log(addToHistory);

let handlejoinVideoCall = async() =>{
    await addToHistory(meetingCode);
    navigate(`/${meetingCode}`);
}

    return(
<>

<div className="navBar">
    <div style={{display:"flex" , alignItems:"center"}}>
        <h3>प्रकट me</h3>
    </div>


      <div style={{display:"flex" , alignItems:"center"}}>
       <IconButton onClick={
        ()=>{
            navigate("/history")
        }
       }>
        <RestoreIcon/><p>History</p>
       </IconButton><br/> <br/>
 
        <button className="btn" onClick={()=>{
            localStorage.removeItem("token")
            navigate("/auth")
        }}>
            Logout
        </button>
    </div>

</div>



    
    <div className="meetContainer">
        <div className="leftPanel">
            <div>
                <h2>Connect freely. Speak safely. That’s Prakat me</h2><br/> <br />
                <div style={{display:'flex' , gap:"10px"}}>
                <TextField onChange={e=> setMeetingCode(e.target.value)}  id="outlined-basic" label="Meeting Code" variant="outlined" />
                    <button className="btn" onClick={handlejoinVideoCall} variant='contained'>join meeting</button>

        
                </div>
            </div>
        </div>

        <div className="rightPanel">
            <img src="/video-call.svg" alt="image" />
        </div>
    </div>

</>
    )
 }
 export default withAuth(HomeComponent);