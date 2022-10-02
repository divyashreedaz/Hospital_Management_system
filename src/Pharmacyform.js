
import React, { Component } from "react";
import axios from "axios";
import "./pharmacyform.css";

class Pharmacyform extends Component {
    state = {
        productName: "",
        productPrice: "",
        pharsdata:[],
        uid:0
    };
    componentDidMount() {
        axios.get(`http://3.14.80.235:8081/pharmacy`)
          .then(res => {
            const pharsdata= res.data;
            this.setState({ pharsdata });
          })
        
      }
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
        {
            this.state.pharsdata.map((info) => {
               
                console.log(this.state.productName)
                if (this.state.productName === info.productName) 
                {
                    // console.log(info.id)
                    this.state.uid=info.productId
                    console.log(this.state.uid)
                }
            })
        }
        e.preventDefault();
        const data = {
            productId:this.state.uid,
            productName: this.state.productName,
            productPrice: this.state.productPrice
        };
        console.log(data)
        console.log(this.state.uid)
        axios
            .put("http://3.14.80.235:8081/pharmacy/"+this.state.uid, data)
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