import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import VideoMeetingComponent from './pages/videoMeetingRoom';
import  HomeComponent from './pages/home';
// import withAuth from "./utils/withAuth";

import { AuthProvider } from './contexts/AuthContext';
//  const ProtectedHome = withAuth(HomeComponent);

function App() {
  return (
   
   <Router>
   < AuthProvider>
   
    <Routes>
     

           <Route path='/' element={ < LandingPage/>}/> 
                 
             <Route path='/auth' element={ <Authentication/>}/> 
                <Route path='/video' element={ <VideoMeetingComponent/>}/> 
            <Route path="/home" element={<HomeComponent/>} />
          <Route path='/:meetingCode' element={<VideoMeetingComponent />} />

           
      </Routes>
   
   </AuthProvider>
     
   </Router>
   
  
  );
}

export default App;
