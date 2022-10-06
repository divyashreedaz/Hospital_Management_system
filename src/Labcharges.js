import React, { createContext } from "react";
import { useState, useEffect, useRef } from "react";
import axios from 'axios'

function Labcharges({ labList,setLabList}) {
	const [labdata, setlabdata] = React.useState([]);
    async function fetchData() {
        try {
            const data = await axios.get(`${process.env.REACT_APP_BACKENDURL}/tests`          
)
            setlabdata(data.data)
            console.log(data.data)
        } catch (error) {
            console.log(error);
        }
        
    }
    useEffect(() => {
        fetchData();
    }, [])
	const handleLabChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...labList];
        list[index][name] = value;
        {
            labdata.map((info) => {
                if (name == "labservice" && value == info.testName) {
                    list[index][name] = info.testName
                    list[index]["labchr"] = info.testPrice
                }
            })
        }
        setLabList(list);
    };



    const handleLabRemove = (index) => {
        const list = [...labList];
        list.splice(index, 1);
        setLabList(list);
    };

    const handleLabAdd = () => {
        setLabList([...labList, { labdate: "", labservice: "", labbatch: "", labexp: "", labchr: "4000", labqty: "1" }]);
    };
	return (
	  <div className="sign-up-container">
		{labList.map((value, index) => (
                            <div key={index} className="services">
                                <div className="first-division" id="boxalign">
                                    <div>
                                        <p>Date</p><input
                                            name="labdate"
                                            type="date"
                                            id="labdate"
                                            value={value.labdate}
                                            onChange={(e) => handleLabChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Service</p>
                                        <input list="pd5" name="labservice" id="labservice" onChange={(e) => handleLabChange(e, index)} />
                                        <datalist id="pd5">
                                        {labdata.map((info) => {

return (
    <option value={info.testName}>{info.testName}</option>
)

})}
                                        </datalist>
                                    </div>
                                    <div>
                                        <p>Batch No.</p>
                                        <input
                                            name="labbatch"
                                            type="text"
                                            id="labbatch"
                                            value={value.labbatch}
                                            onChange={(e) => handleLabChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Exp.Dt</p>
                                        <input
                                            name="labexp"
                                            type="date"
                                            id="labexp"
                                            value={value.labexp}
                                            onChange={(e) => handleLabChange(e, index)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <p>Charges</p>
                                        <input
                                            name="labchr"
                                            type="text"
                                            placeholder="Enter zero if No value"
                                            id="labchr"
                                            value={value.labchr}
                                            onChange={(e) => handleLabChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Quantity</p>
                                        <input
                                            name="labqty"
                                            type="text"
                                            id="labqty"
                                            placeholder="Enter zero if No value"
                                            value={value.labqty}
                                            onChange={(e) => handleLabChange(e, index)}
                                            required
                                        />
                                    </div>
                                    {labList.length - 1 === index && (
                                        <button
                                            type="button"
                                            onClick={handleLabAdd}
                                            className="add-btn"
                                        >
                                            <span>Add a row</span>
                                        </button>
                                    )}
                                </div>
                                <div className="second-division">
                                    {labList.length !== 1 && (
                                        <button
                                            type="button"
                                            onClick={() => handleLabRemove(index)}
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
  
  export default Labcharges;