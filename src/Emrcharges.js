
import React, { createContext } from "react";
import { useState, useEffect, useRef } from "react";


function Emrcharges({ emrList,setEmrList}) {
	
	const handleEmrChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...emrList];

        list[index][name] = value;
        if (name == "emrservice" && value == "Registration Charges") {
            list[index][name] = "Registration Details"
            list[index]["emrchr"] = "500"
        }
       

        setEmrList(list);
    };

    const handleEmrRemove = (index) => {
        const list = [...emrList];
        list.splice(index, 1);
        setEmrList(list);
    };

    const handleEmrAdd = () => {
        setEmrList([...emrList, { emrdate: "", emrservice: "Registration Details", emrbatch: "", emrexp: "", emrchr: "500", emrqty: "1" }]);
    };
	return (
	  <div className="sign-up-container">
		 {emrList.map((value, index) => (
                            <div key={index} className="services">
                                <div className="first-division" id="boxalign">
                                    <div>
                                        <p>Date</p><input
                                            name="emrdate"
                                            type="date"
                                            id="emrdate"
                                            value={value.emrdate}
                                            onChange={(e) => handleEmrChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Service</p>
                                        <input list="pd1" name="emrservice" id="emrservice" onChange={(e) => handleEmrChange(e, index)}/>
                                        <datalist id="pd1">
                                            <option default value="Registration Charges">Registration Charges</option>
                                        </datalist>
                                    </div>
                                    <div>
                                        <p>Batch No.</p>
                                        <input
                                            name="emrbatch"
                                            type="text"
                                            id="emrbatch"
                                            value={value.emrbatch}
                                            onChange={(e) => handleEmrChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Exp.Dt</p>
                                        <input
                                            name="emrexp"
                                            type="date"
                                            id="emrexp"
                                            value={value.emrexp}
                                            onChange={(e) => handleEmrChange(e, index)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <p>Charges</p>
                                        <input
                                            name="emrchr"
                                            type="text"
                                            id="wardchr"
                                            value={value.emrchr}
                                            placeholder="Enter zero if No value"
                                            onChange={(e) => handleEmrChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Quantity</p>
                                        <input
                                            name="emrqty"
                                            type="text"
                                            id="emrqty"
                                            value={value.emrqty}
                                            onChange={(e) => handleEmrChange(e, index)}
                                            placeholder="Enter zero if No value"
                                            required
                                        />
                                    </div>


                                    {emrList.length - 1 === index && (
                                        <button
                                            type="button"
                                            onClick={handleEmrAdd}
                                            className="add-btn"
                                        >
                                            <span>Add a row</span>
                                        </button>
                                    )}
                                </div>
                                <div className="second-division">
                                    {emrList.length !== 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleEmrRemove(index)}
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
  
  export default Emrcharges;