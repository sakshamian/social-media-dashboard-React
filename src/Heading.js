import { useState } from "react";
import './Heading.css';

function Heading(props){
    const toggle = document.getElementById('toggler');
    const body = document.querySelector('body');
    
    function switchMode(){
        if(toggle.checked){
            body.classList.remove('dark');
            body.classList.add('light');
        }
        else{
            body.classList.remove('light');
            body.classList.add('dark');
        }
    }
    return (
        <div className="header">
            <div className="left-header">
                <h1>Social Media Dashboard</h1>
                <h2>Total followers: 23,004</h2>
            </div>
            <div className="right-header">
                <h3>Dark Mode</h3>
                <label className="switch">
                    <input type="checkbox" id="toggler" onClick={switchMode}/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
}

export default Heading;