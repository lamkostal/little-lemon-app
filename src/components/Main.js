import HomePage from "./Homepage";
import BookingPage from "./BookingPage";
import { Routes, Route } from "react-router-dom";


const Main = () => {
  return (
    
     <main className="main-content">
        <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
</Routes>
     
    </main>
  
    
   
  );
};

export default Main;