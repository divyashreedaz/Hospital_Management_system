import React, { createContext } from "react";
import { useState, useEffect, useRef } from "react";


function Wardcharges({ wardList,setWardList}) {
	
	const handleWardChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...wardList];
        list[index][name] = value;
        if (name == "wardservice" && value == "ER") {
            list[index][name] = "ER"
            list[index]["wardchr"] = "4000"
        }
        else if (name == "wardservice" && value == "ICU") {
            list[index][name] = "ICU"
            list[index]["wardchr"] = "40000"
        }
        else if (name == "wardservice" && value == "GENERAL WARD") {
            list[index][name] = "GENERAL WARD"
            list[index]["wardchr"] = "100"
        }
        setWardList(list);
    };

    const handleWardRemove = (index) => {
        const list = [...wardList];
        list.splice(index, 1);
        setWardList(list);
    };

    const handleWardAdd = () => {
        setWardList([...wardList, { warddate: "", wardservice: "", wardbatch: "", wardexp: "", wardchr: "4000", wardqty: "1" }]);
    };
	return (
	  <div className="sign-up-container">
		{wardList.map((value, index) => (
                            <div key={index} className="services">
                                <div className="first-division" id="boxalign">
                                    <div>
                                        <p>Date</p><input
                                            name="warddate"
                                            type="date"
                                            id="warddate"
                                            value={value.warddate}
                                            onChange={(e) => handleWardChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Service</p>
                                        <input list="pd2" name="wardservice" id="wardservice" onChange={(e) => handleWardChange(e, index)}/>
                                        <datalist id="pd2">
                                            <option default value="ER"></option>
                                            <option value="ICU"></option>
                                            <option value="GENERAL WARD"></option>
                                        </datalist>
                                    </div>
                                    <div>
                                        <p>Batch No.</p>
                                        <input
                                            name="wardbatch"
                                            type="text"
                                            id="wardbatch"
                                            value={value.wardbatch}
                                            onChange={(e) => handleWardChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Exp.Dt</p>
                                        <input
                                            name="wardexp"
                                            type="date"
                                            id="wardexp"
                                            value={value.wardexp}
                                            onChange={(e) => handleWardChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Charges</p>
                                        <input
                                            name="wardchr"
                                            type="text"
                                            id="wardchr"
                                            value={value.wardchr}
                                            placeholder="Enter zero if No value"
                                            onChange={(e) => handleWardChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Quantity</p>
                                        <input
                                            name="wardqty"
                                            type="text"
                                            id="wardqty"
                                            value={value.wardqty}
                                            placeholder="Enter zero if No value"
                                            onChange={(e) => handleWardChange(e, index)}
                                            required
                                        />
                                    </div>
                                    {wardList.length - 1 === index && (
                                        <button
                                            type="button"
                                            onClick={handleWardAdd}
                                            className="add-btn"
                                        >
                                            <span>Add a row</span>
                                        </button>
                                    )}
                                </div>
                                <div className="second-division">
                                    {wardList.length !== 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleWardRemove(index)}
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
  
  export default Wardcharges;