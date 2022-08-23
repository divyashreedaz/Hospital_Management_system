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
                        <a href="/Certificates" class="button">VISITOR</a>
                    </div>
                    <div class="boxhome3">
                    <a href="/Certificates" class="button">VISITOR</a>
                    </div>
                    <div class="boxhome4"><a href="/Certificates" class="button">VISITOR</a>
                    </div>
                    <div class="boxhome5">
                    <a href="/Certificates" class="button">VISITOR</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
