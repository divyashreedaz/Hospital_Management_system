
import React, { Component } from "react";
import axios from "axios";
import "./Labtest.css";

class Labtest extends Component {
   
    state = {
        testName: "",
        testPrice: ""
    };

    ontestNameChange = e => {
        this.setState({
            testName: e.target.value
        });
    };

    ontestPriceChange = e => {
        this.setState({
            testPrice: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            testName: this.state.testName,
            testPrice: this.state.testPrice
        };
        console.log(data)
        axios
            .post(`${process.env.REACT_APP_BACKENDURL}/tests`, data)
            .then(res => console.log(res))
            alert("data saved successfully")
            .catch(err => console.log(err));
    };

    render() {
       
        return (
            <div className="post">
            <h1 style={{textAlign:"center"}}>MOST FREQUENT TEST</h1>
                <form style={{marginTop:"5%",marginLeft:"2%"}} className="post" onSubmit={this.handleSubmit}>
                    <p style={{fontSize:"150%",fontWeight:"bold"}}>Test Name</p>
                    <input id="input1"
                        placeholder="TestName" value={this.state.testName}
                        onChange={this.ontestNameChange} required
                    />

                    <p style={{fontSize:"150%",fontWeight:"bold"}}>Test Price</p>
                    <input id="input2"
                        placeholder="TestPrice" value={this.state.testPrice}
                        onChange={this.ontestPriceChange} required
                    />
                    <br /><br/>

                    <button class="btnstyle1" type="submit">Save to database</button>
                </form>
            </div>
        );
    }
}

export default Labtest;