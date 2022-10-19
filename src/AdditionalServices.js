
import React, { Component } from "react";
import axios from "axios";
import "./AdditionalServices.css";

class AdditionalServices extends Component {
   
    state = {
        serviceName: "",
        serviceCharge: ""
    };

    onserviceNameChange = e => {
        this.setState({
            serviceName: e.target.value
        });
    };

    onserviceChargeChange = e => {
        this.setState({
            serviceCharge: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            serviceName: this.state.serviceName,
            serviceCharge: this.state.serviceCharge
        };
        console.log(data)
        axios
            .post(`${process.env.REACT_APP_BACKENDURL}/additional-services`, data)
            .then(res => console.log(res))
            alert("data saved successfully")
            .catch(err => console.log(err));
    };

    render() {
       
        return (
            <div className="post">
            <h1 style={{textAlign:"center"}}>MOST FREQUENT SERVICES</h1>
                <form style={{marginTop:"5%",marginLeft:"2%"}} className="post" onSubmit={this.handleSubmit}>
                    <p style={{fontSize:"150%",fontWeight:"bold"}}>Service Name</p>
                    <input id="inputservices1"
                        placeholder="Service Name" value={this.state.serviceName}
                        onChange={this.onserviceNameChange} required
                    />

                    <p style={{fontSize:"150%",fontWeight:"bold"}}>Service Charge</p>
                    <input id="inputservices2"
                        placeholder="Service Charge" value={this.state.serviceCharge}
                        onChange={this.onserviceChargeChange} required
                    />
                    <br /><br/>

                    <button class="btnstyleservices" type="submit">Save to database</button>
                </form>
            </div>
        );
    }
}

export default AdditionalServices;