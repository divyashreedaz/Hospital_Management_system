import React, { createContext } from "react";
import { useState, useEffect, useRef } from "react";
import axios from 'axios'

function Servicecharges({ serList, setSerList }) {
    const [servicedata, setservicedata] = React.useState([]);
    async function fetchData() {
        try {
            const data = await axios.get(`${process.env.REACT_APP_BACKENDURL}/additional-services`
            )
            setservicedata(data.data)
            console.log(data.data)
        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        fetchData();
    }, [])
    const handleSerChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...serList];
        list[index][name] = value;
        {
            servicedata.map((info) => {
                if (name == "serservice" && value == info.serviceName) {
                    list[index][name] = info.serviceName
                    list[index]["serchr"] = info.serviceCharge
                }
            })
        }
        setSerList(list);
    };

    const handleSerRemove = (index) => {
        const list = [...serList];
        list.splice(index, 1);
        setSerList(list);
    };

    const handleSerAdd = () => {
        setSerList([...serList, { serdate: "", serservice: "", serbatch: "", serexp: "", serchr: "4000", serqty: "1" }]);
    };
    return (
        <div className="sign-up-container">
            {serList.map((value, index) => (
                <div key={index} className="services">
                    <div className="first-division" id="boxalign">
                        <div>
                            <p>Date</p><input
                                name="serdate"
                                type="date"
                                id="serdate"
                                value={value.serdate}
                                onChange={(e) => handleSerChange(e, index)}
                                required
                            />
                        </div>
                        <div>
                            <p>Service</p>
                            <input list="pd4" name="serservice" id="serviceName" onChange={(e) => handleSerChange(e, index)} />
                            <datalist id="pd4">
                                {servicedata.map((info) => {

                                    return (
                                        <option value={info.serviceName.toUpperCase()}></option>
                                    )

                                })}
                            </datalist>
                        </div>
                        <div>
                            <p>Batch No.</p>
                            <input
                                name="serbatch"
                                type="text"
                                id="serbatch"
                                value={value.serbatch}
                                onChange={(e) => handleSerChange(e, index)}
                                required
                            />
                        </div>
                        <div>
                            <p>Exp.Dt</p>
                            <input
                                name="serexp"
                                type="date"
                                id="serexp"
                                value={value.serexp}
                                onChange={(e) => handleSerChange(e, index)}
                                required
                            />
                        </div>


                        <div>
                            <p>Charges</p>
                            <input
                                name="serchr"
                                type="text"
                                id="serchr"
                                value={value.serchr}
                                placeholder="Enter zero if No value"
                                onChange={(e) => handleSerChange(e, index)}
                                required
                            />
                        </div>
                        <div>
                            <p>Quantity</p>
                            <input
                                name="serqty"
                                type="text"
                                id="serqty"
                                value={value.serqty}
                                placeholder="Enter zero if No value"
                                onChange={(e) => handleSerChange(e, index)}
                                required
                            />
                        </div>


                        {serList.length - 1 === index && (
                            <button
                                type="button"
                                onClick={handleSerAdd}
                                className="add-btn"
                            >
                                <span>Add a row</span>
                            </button>
                        )}
                    </div>
                    <div className="second-division">
                        {serList.length !== 1 && (
                            <button
                                type="button"
                                onClick={() => handleSerRemove(index)}
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

export default Servicecharges;