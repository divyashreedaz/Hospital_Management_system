import React, { createContext } from "react";
import { useState, useEffect, useRef } from "react";


function Servicecharges({ serList, setSerList}) {
	
    const handleSerChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...serList];
        list[index][name] = value;
        if (name == "serservice" && value == "ER") {
            list[index][name] = "ER"
            list[index]["serchr"] = "4000"
        }
        else if (name == "serservice" && value == "ICU") {
            list[index][name] = "ICU"
            list[index]["serchr"] = "40000"
        }
        else if (name == "serservice" && value == "GENERAL WARD") {
            list[index][name] = "GENERAL WARD"
            list[index]["serchr"] = "100"
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
                                        <input list="pd4" name="serservice" id="serservice" onChange={(e) => handleSerChange(e, index)}/>
                                        <datalist id="pd4">
                                            <option default value="ER"></option>
                                            <option value="ICU"></option>
                                            <option value="GENERAL WARD"></option>
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