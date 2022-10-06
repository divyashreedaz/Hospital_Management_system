import React, { createContext } from "react";
import { useState, useEffect, useRef } from "react";
import axios from 'axios'

function Concharges({ conList, setConList}) {
    const [consultantdata, setconsultantdata] = React.useState([]);
    async function fetchData() {
        try {
            const data = await axios.get('http://3.14.80.235:8081/consultants'           
)
            setconsultantdata(data.data)
            console.log(data.data)
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(() => {
        fetchData();
    }, [])
    const handleConChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...conList];
        list[index][name] = value;
        {
            consultantdata.map((info) => {
                if (name == "conservice" && value == info.consultantName) {
                    list[index][name] = info.consultantName
                    list[index]["conchr"] = info.consultantCharge
                }
            })
        }
        setConList(list);
    };

    const handleConRemove = (index) => {
        const list = [...conList];
        list.splice(index, 1);
        setConList(list);
    };

    const handleConAdd = () => {
        setConList([...conList, { condate: "", conservice: "", conbatch: "", conexp: "", conchr: "4000", conqty: "1" }]);
    };
	return (
	  <div className="sign-up-container">
		 {conList.map((value, index) => (
                            <div key={index} className="services">
                                <div className="first-division" id="boxalign">
                                    <div>
                                        <p>Date</p><input
                                            name="condate"
                                            type="date"
                                            id="condate"
                                            value={value.condate}
                                            onChange={(e) => handleConChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Service</p>
                                        <input list="pd3" name="conservice" id="conservice" onChange={(e) => handleConChange(e, index)}/>
                                        <datalist id="pd3">
                                        {consultantdata.map((info) => {

return (
    <option value={info.consultantName}>{info.consultantName}</option>
)

})}
                                        </datalist>
                                    </div>
                                    <div>
                                        <p>Batch No.</p>
                                        <input
                                            name="conbatch"
                                            type="text"
                                            id="conbatch"
                                            value={value.conbatch}
                                            onChange={(e) => handleConChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Exp.Dt</p>
                                        <input
                                            name="conexp"
                                            type="date"
                                            id="conexp"
                                            value={value.conexp}
                                            onChange={(e) => handleConChange(e, index)}
                                            required
                                        />
                                    </div>


                                    <div>
                                        <p>Charges</p>
                                        <input
                                            name="conchr"
                                            type="text"
                                            id="conchr"
                                            value={value.conchr}
                                            onChange={(e) => handleConChange(e, index)}
                                            placeholder="Enter zero if No value"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Quantity</p>
                                        <input
                                            name="conqty"
                                            type="text"
                                            id="conqty"
                                            value={value.conqty}
                                            onChange={(e) => handleConChange(e, index)}
                                            placeholder="Enter zero if No value"
                                            required
                                        />
                                    </div>


                                    {conList.length - 1 === index && (
                                        <button
                                            type="button"
                                            onClick={handleConAdd}
                                            className="add-btn"
                                        >
                                            <span>Add a row</span>
                                        </button>
                                    )}
                                </div>
                                <div className="second-division">
                                    {conList.length !== 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleConRemove(index)}
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
  
  export default  Concharges;