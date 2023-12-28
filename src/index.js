import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Services from "./components/services/Service";
import Certifications from "./components/certifications/Certifications";
import Contact from "./components/contact/Contact";
import Home from "./components/home/Home";
import Experiences from "./components/experiences/Experiences";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/logout" element={<Logout/>}/>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/services" element={<Services/>}/>
                <Route path="/experiences" element={<Experiences/>}/>
                <Route path="/certifications" element={<Certifications/>}/>
                <Route path="/contact-me" element={<Contact/>}/>
            </Routes>
        </App>
    </BrowserRouter>
);

reportWebVitals();
