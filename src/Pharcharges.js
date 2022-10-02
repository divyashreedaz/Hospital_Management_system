import React, { createContext } from "react";
import axios from 'axios'
import { useState, useEffect, useRef } from "react";
// import phardata from "./phardata.json";

function Pharcharges({ pharList, setPharList }) {
    const headers = {
        "Content-Type": "application/json",
      };
    const [phardata, setphardata] = React.useState([]);
    async function fetchData() {
        try {
            const data = await axios.get('http://3.14.80.235:8081/pharmacy'           
)
            setphardata(data.data)
            // console.log(data.data)
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(() => {
        fetchData();
    }, [])
    const handlePharChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...pharList];
        {
            phardata.map((info) => {
                if (name == "pharservice" && value == info.productName) {
                    list[index][name] = info.productName
                    list[index]["pharchr"] = info.productPrice
                }
            })
        }
        setPharList(list);
    };

    const handlePharRemove = (index) => {
        const list = [...pharList];
        list.splice(index, 1);
        setPharList(list);
    };

    const handlePharAdd = () => {
        setPharList([...pharList, { phardate: "", pharservice: "", pharbatch: "", pharexp: "", pharchr: "590", pharqty: "1" }]);
    };

    return (
        <div className="sign-up-container">
            {pharList.map((value, index) => (
                <div key={index} className="services">
                    <div className="first-division1" id="boxalign1">
                        <div>
                            <p>Date</p><input
                                name="phardate"
                                type="date"
                                id="phardate"
                                value={value.phardate}
                                onChange={(e) => handlePharChange(e, index)}
                                required
                            />
                        </div>
                        <div>
                            <p>Service</p>
                            <input list="pd6" name="pharservice" id="productName" onChange={(e) => handlePharChange(e, index)} />
                            <datalist id="pd6">
                                {phardata.map((info) => {

                                    return (
                                        <option value={info.productName}>{info.productName}</option>
                                    )

                                })}

                            </datalist>

                        </div>
                        <div>
                            <p>Batch No.</p><input
                                name="pharbatch"
                                type="text"
                                id="pharbatch"
                                value={value.pharbatch}
                                onChange={(e) => handlePharChange(e, index)}
                                required
                            />
                        </div>
                        <div>
                            <p>Exp.Dt</p>
                            <input
                                name="pharexp"
                                type="date"
                                id="pharexp"
                                value={value.pharexp}
                                onChange={(e) => handlePharChange(e, index)}
                                required
                            />
                        </div>
                        <div>
                            <p>Charges</p>
                            <input
                                name="pharchr"
                                type="text"
                                id="pharchr"
                                value={value.pharchr}
                                onChange={(e) => handlePharChange(e, index)}
                                placeholder="Enter zero if No value"
                                required
                            />
                        </div>
                        <div>
                            <p>Quantity</p>
                            <input
                                name="pharqty"
                                type="text"
                                id="pharqty"
                                value={value.pharqty}
                                placeholder="Enter zero if No value"
                                onChange={(e) => handlePharChange(e, index)}
                                required
                            />
                        </div>
                        {pharList.length - 1 === index && (
                            <button
                                type="button"
                                onClick={handlePharAdd}
                                className="add-btn"
                            >
                                <span>Add a row</span>
                            </button>
                        )}
                    </div>
                    <div className="second-division1">
                        {pharList.length !== 1 && (
                            <button
                                type="button"
                                onClick={() => handlePharRemove(index)}
                                className="remove-btn"
                            >
                                <span>Remove</span>
                            </button>
                        )}

                    </div>

                </div>

            ))}
        </div>
    );
}

export default Pharcharges;