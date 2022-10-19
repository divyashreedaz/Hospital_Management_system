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
                    <div class="boxhome4">
                    <a href="/pharmacyform" class="button">PHARMACY</a>
                    </div>
                    <div class="boxhome5">
                    <a href="/Labtest" class="button">DIAGNOSIS</a>
                    </div>
                    <div class="boxhome6">
                    <a href="/Consultant" class="button">CONSULTANT</a>
                    </div>
                    <div class="boxhome7">
                    <a href="/AdditionalServices" class="button">SERVICES</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
