import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Services from "./components/services/Service";
import Certifications from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Experiences from "./components/experiences/Experiences";
import Registration from "./components/registration/Registration";
import Login from "./components/auth/login/login";
import About from "./components/about/About";
import Education from "./components/education/Education";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App>
            <Routes>
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/register" element={<Registration/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route path="/about-me" element={<About/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/experiences" element={<Experiences/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/contact-me" element={<Contact/>}/>
            </Routes>
        </App>
    </BrowserRouter>
);

reportWebVitals();
