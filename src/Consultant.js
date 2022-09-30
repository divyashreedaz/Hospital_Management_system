
import React, { Component } from "react";
import axios from "axios";
import "./Consultant.css";

class Consultant extends Component {
   
    state = {
        consultantName: "",
        consultantCharge: ""
    };

    onconsultantNameChange = e => {
        this.setState({
            consultantName: e.target.value
        });
    };

    onconsultantChargeChange = e => {
        this.setState({
            consultantCharge: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            consultantName: this.state.consultantName,
            consultantCharge: this.state.consultantCharge
        };
        console.log(data)
        axios
            .post("http://3.14.80.235:8081/consultants", data)
            .then(res => console.log(res))
            alert("data saved successfully")
            .catch(err => console.log(err));
    };

    render() {
       
        return (
            <div className="post">
            <h1 style={{textAlign:"center"}}>MOST FREQUENT CONSULTANT</h1>
                <form style={{marginTop:"5%",marginLeft:"2%"}} className="post" onSubmit={this.handleSubmit}>
                    <p style={{fontSize:"150%",fontWeight:"bold"}}>Consultant Name</p>
                    <input id="input1"
                        placeholder="Consultant Name" value={this.state.consultantName}
                        onChange={this.onconsultantNameChange} required
                    />

                    <p style={{fontSize:"150%",fontWeight:"bold"}}>Consultant Charge</p>
                    <input id="input2"
                        placeholder="Consultant Charge" value={this.state.consultantCharge}
                        onChange={this.onconsultantChargeChange} required
                    />
                    <br /><br/>

                    <button class="btnstyle2" type="submit">Save to database</button>
                </form>
            </div>
        );
    }
}

export default Consultant;