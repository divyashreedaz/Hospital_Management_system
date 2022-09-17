import React, { Component } from "react";
import { useState, useEffect, useRef } from "react";
import ReactToPrint from "react-to-print";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
function Pharmacyform() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const handleProductNameChange = event => {
        setProductName(event.target.value);
    };
    const handleProductPriceChange = event => {
        setProductPrice(event.target.value);
    };

    useEffect(() => {
        handleclick();
    }, [])

    async function handleclick() {
        fetch('http://3.15.23.112:8081/pharmacy', {  // Enter your IP address here

            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(productName, productPrice) // body data type must match "Content-Type" header

        })
    }
    return (
        <div>
            <h1>
                MOST USED MEDICINES
            </h1>
            <p>Product Name</p>

            <div  ><input
                name="productName"
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => handleProductNameChange(e)}
                required
            />
            </div>
            <div>
                <p>MRP</p>

                <div ><input
                    name="productPrice"
                    type="text"
                    id="productPrice"
                    value={productPrice}
                    onChange={(e) => handleProductPriceChange(e)}
                    required
                />
                </div>
            </div>
            <br />
            <button onClick={handleclick()}>Save to database</button>
        </div>

    )
}
export default Pharmacyform;
