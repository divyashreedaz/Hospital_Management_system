import React, { Component } from "react";
import Navbar from "./Navbar/Navbar"
import './Homepage.css';
class Homepage extends Component {

    render() {


        return (
            <div>
                <Navbar />
                <div class="wrapperhome">
                    <div class="boxhome1" >
                        <a href="/Certificates" class="button">VENDOR</a>
                    </div>
                    <div class="boxhome3">
                    <a href="/Bill" class="button">PATIENT</a>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}

export default Homepage;
