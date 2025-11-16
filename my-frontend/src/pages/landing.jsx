import React from 'react'
import '../App.css';
import { Router, useNavigate } from 'react-router-dom';

export default function LandingPage() {

const router = useNavigate();
  return (
    <div className='landingPageContainer'>
      <nav className='navbar'>
     
        <div className='navHeader'>
         <img src="/abc.png" alt="logo" className='logoImage'  height={300} width={300}/>
        </div>

       
        <div className='navList'>
          <button className='btn'  
        
           onClick={()=>{
            router("/3ulyeiwdh")
          }} >Join as Guest</button>
          
          <button className='btn login'  onClick={() => {
                        router("/auth")

                    }}>Login</button>


          <button className='btn signup' onClick={() => {
                  router("/auth?mode=signup")

                    }}>Ragister</button>
        </div>
      </nav>




 <button className='btn join_as_Guest'  
        
           onClick={()=>{
            router("/3ulyeiwdh")
          }} >Join as Guest</button>

    </div>
  );
}

