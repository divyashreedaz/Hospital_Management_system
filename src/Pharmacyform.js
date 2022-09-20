
import React, { Component } from "react";
import axios from "axios";
import "./pharmacyform.css";

class Pharmacyform extends Component {
    state = {
        productName: "",
        productPrice: ""
    };

    onproductNameChange = e => {
        this.setState({
            productName: e.target.value
        });
    };

    onproductPriceChange = e => {
        this.setState({
            productPrice: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            productName: this.state.productName,
            productPrice: this.state.productPrice
        };
        console.log(data)
        axios
            .post("http://18.220.4.67:8081/pharmacy", data)
            .then(res => console.log(res))
            alert("data saved successfully")
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="post">
            <h1 style={{textAlign:"center"}}>MOST USED MEDICINES</h1>
                <form style={{marginTop:"5%",marginLeft:"2%"}} className="post" onSubmit={this.handleSubmit}>
                    <p style={{fontSize:"150%",fontWeight:"bold"}}>ProductName</p>
                    <input id="input1"
                        placeholder="ProductName" value={this.state.productName}
                        onChange={this.onproductNameChange} required
                    />

                    <p style={{fontSize:"150%",fontWeight:"bold"}}>ProductPrice</p>
                    <input id="input2"
                        placeholder="ProductPrice" value={this.state.productPrice}
                        onChange={this.onproductPriceChange} required
                    />
                    <br /><br/>

                    <button class="btnstyle" type="submit">Save to database</button>
                </form>
            </div>
        );
    }
}

export default Pharmacyform;