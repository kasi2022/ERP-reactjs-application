import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Header from "./modules/Header/Header";
import Home from "./modules/Home/Home";
import User from "./modules/User/User";
import Footer from "./modules/Footer/Footer";

export default function Layout(){
    return(
        <Router>
            <Header/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/user" element={<User/>}/>
              </Routes>
            <Footer/>
        </Router>
    )
}