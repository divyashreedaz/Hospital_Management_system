import React, { Component } from "react";
import Navbar from "./Navbar/Navbar"
import './Homepage.css';
class Homepage extends Component {

    render() {


        return (
            <div>
                <Navbar />
                <div className="wrapperhome">
                    <div className="boxhome1" >
                        <a href="/Certificates" className="button">VENDOR</a>
                    </div>
                    <div className="boxhome3">
                    <a href="/Bill" className="button">PATIENT</a>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

export default Homepage;
