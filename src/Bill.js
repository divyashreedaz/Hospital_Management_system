import { useState, useEffect, useRef } from "react";
import "./Bill.css";
import ReactToPrint from "react-to-print";
import Navbar from "./Navbar/Navbar";
function Bill() {
    useEffect(() => {

    }, [])
    let componentRef = useRef(null);
    var total = 0;
    var total1 = 0;
    var wardtotal = 0;
    var wardtotal1 = 0;
    var contotal = 0;
    var contotal1 = 0;
    var sertotal = 0;
    var sertotal1 = 0;
    var labtotal = 0;
    var labtotal1 = 0;
    var phartotal = 0;
    var phartotal1 = 0;
    const [emrList, setEmrList] = useState([{ emrdate: "", emrservice: "", emrchr: "", emrqty: "" }]);
    const [wardList, setWardList] = useState([{ warddate: "", wardservice: "", wardchr: "", wardqty: "" }]);
    const [conList, setConList] = useState([{ condate: "", conservice: "", conchr: "", conqty: "" }]);
    const [serList, setSerList] = useState([{ serdate: "", serservice: "", serchr: "", serqty: "" }]);
    const [labList, setLabList] = useState([{ labdate: "", labservice: "", labchr: "", labqty: "" }]);
    const [pharList, setPharList] = useState([{ phardate: "", pharservice: "", pharbatch: "", pharexp: "", pharchr: "", pharqty: "" }]);
    const [pername, setPerName] = useState('');
    const [perbill, setPerbill] = useState('');
    const [perip, setPerip] = useState('');
    const [permr, setPermr] = useState('');
    const [percon, setPercon] = useState('');
    const [perage, setPerage] = useState('');
    const [perbd, setPerbd] = useState('');
    const [perroom, setPerroom] = useState('');
    const [perdoa, setPerdoa] = useState('');
    const [perdod, setPerdod] = useState('');
    const [perdummy, setPerdummy] = useState('');
    const [advance, setAdvance] = useState(0);
    const [discount, setDiscount] = useState(0);
    const handleadvanceChange = event => {
        setAdvance(event.target.value);
    };
    const handlediscountChange = event => {
        setDiscount(event.target.value);
    };
    const handlenameChange = event => {
        setPerName(event.target.value);
    };
    const handledummyChange = event => {
        setPerdummy(event.target.value);
    };
    const handlebdChange = event => {
        setPerbd(event.target.value);
    };
    const handleroomChange = event => {
        setPerroom(event.target.value);
    };
    const handledoaChange = event => {
        setPerdoa(event.target.value);
    };
    const handledodChange = event => {
        setPerdod(event.target.value);
    };
    const handleageChange = event => {
        setPerage(event.target.value);
    };
    const handlebillChange = event => {
        setPerbill(event.target.value);
    };
    const handleipChange = event => {
        setPerip(event.target.value);
    };
    const handlemrChange = event => {
        setPermr(event.target.value);
    };
    const handleconChange = event => {
        setPercon(event.target.value);
    };

    const handleEmrChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...emrList];
        list[index][name] = value;
        setEmrList(list);
    };

    const handleEmrRemove = (index) => {
        const list = [...emrList];
        list.splice(index, 1);
        setEmrList(list);
    };

    const handleEmrAdd = () => {
        setEmrList([...emrList, { emrdate: "", emrservice: "", emrchr: "", emrqty: "" }]);
    };
    const handleWardChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...wardList];
        list[index][name] = value;
        setWardList(list);
    };

    const handleWardRemove = (index) => {
        const list = [...wardList];
        list.splice(index, 1);
        setWardList(list);
    };

    const handleWardAdd = () => {
        setWardList([...wardList, { warddate: "", wardservice: "", wardchr: "", wardqty: "" }]);
    };
    const handleConChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...wardList];
        list[index][name] = value;
        setConList(list);
    };

    const handleConRemove = (index) => {
        const list = [...conList];
        list.splice(index, 1);
        setConList(list);
    };

    const handleConAdd = () => {
        setConList([...conList, { condate: "", conservice: "", conchr: "", conqty: "" }]);
    };
    const handleSerChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...serList];
        list[index][name] = value;
        setSerList(list);
    };

    const handleSerRemove = (index) => {
        const list = [...serList];
        list.splice(index, 1);
        setSerList(list);
    };

    const handleSerAdd = () => {
        setSerList([...serList, { serdate: "", serservice: "", serchr: "", serqty: "" }]);
    };
    const handleLabChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...labList];
        list[index][name] = value;
        setLabList(list);
    };

    const handleLabRemove = (index) => {
        const list = [...labList];
        list.splice(index, 1);
        setLabList(list);
    };

    const handleLabAdd = () => {
        setLabList([...labList, { labdate: "", labservice: "", labchr: "", labqty: "" }]);
    };
    const handlePharChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...pharList];
        list[index][name] = value;
        setPharList(list);
    };

    const handlePharRemove = (index) => {
        const list = [...pharList];
        list.splice(index, 1);
        setPharList(list);
    };

    const handlePharAdd = () => {
        setPharList([...pharList, { phardate: "", pharservice: "", pharbatch: "", pharexp: "", pharchr: "", pharqty: "" }]);
    };

    {
        emrList &&
            emrList.map((value, index) => (
                <div key={index}>

                    {total1 += parseInt(value.emrchr) * parseInt(value.emrqty)}


                </div>

            ))
    }
    {
        wardList &&
            wardList.map((value, index) => (
                <div key={index}>

                    {wardtotal1 += parseInt(value.wardchr) * parseInt(value.wardqty)}


                </div>

            ))
    }
    {
        conList &&
            conList.map((value, index) => (
                <div key={index}>

                    {contotal1 += parseInt(value.conchr) * parseInt(value.conqty)}


                </div>

            ))
    }
    {
        serList &&
            serList.map((value, index) => (
                <div key={index}>

                    {sertotal1 += parseInt(value.serchr) * parseInt(value.serqty)}


                </div>

            ))
    }
    {
        labList &&
            labList.map((value, index) => (
                <div key={index}>

                    {labtotal1 += parseInt(value.labchr) * parseInt(value.labqty)}


                </div>

            ))
    }
    {
        pharList &&
            pharList.map((value, index) => (
                <div key={index}>

                    {phartotal1 += parseInt(value.pharchr) * parseInt(value.pharqty)}


                </div>

            ))
    }
    return (
        <div>
            <Navbar />
            <div>

                <form className="App" autoComplete="off">

                    <div className="form-field">
                        <div class="float-containerbl" >


                            <div class="float-childbl" >

                                <div>
                                <tr hidden>
                                        <td>N</td><td> <div style={{ marginLeft: "630%" }}>:</div></td><td>
                                            <div style={{ marginLeft: "17%" }} ><input
                                                name="perdummy"
                                                type="text"
                                                id="perdummy"
                                                value={perdummy}
                                                onChange={(e) => handledummyChange(e)}
                                                required
                                            />
                                            </div></td>
                                    </tr>
                                    <tr>
                                        <td>NAME</td><td> <div style={{ marginLeft: "630%" }}>:</div></td><td>
                                            <div style={{ marginLeft: "17%" }} ><input
                                                name="pername"
                                                type="text"
                                                id="pername"
                                                value={pername}
                                                onChange={(e) => handlenameChange(e)}
                                                required
                                            />
                                            </div></td>
                                    </tr>
                                    </div>

                                <div>
                                    <tr><td>Bill NO.</td><td><div style={{ marginLeft: "450%" }}>:</div></td><td><div style={{ marginLeft: "12%" }}><input
                                        name="perbill"
                                        type="text"
                                        id="perbill"
                                        value={perbill}
                                        onChange={(e) => handlebillChange(e)}
                                        required
                                    /></div></td>
                                    </tr></div>

                                <div>
                                    <tr><td>IP NO.</td><td><div style={{ marginLeft: "570%" }}>:</div></td><td><div style={{ marginLeft: "15%" }}><input
                                        name="perip"
                                        type="text"
                                        id="perip"
                                        value={perip}
                                        onChange={(e) => handleipChange(e)}
                                        required
                                    /></div></td>
                                    </tr></div>
                                <div><td>MR NO.</td><td><div style={{ marginLeft: "420%" }}>:</div></td>
                                    <td ><div style={{ marginLeft: "11%" }}><input
                                        name="permr"
                                        type="text"
                                        id="permr"
                                        value={permr}
                                        onChange={(e) => handlemrChange(e)}
                                        required
                                    /></div>
                                    </td></div>
                                <div>
                                    <tr><td>Consultant</td><td>:</td><td><input
                                        name="percon"
                                        type="text"
                                        id="percon"
                                        value={percon}
                                        onChange={(e) => handleconChange(e)}
                                        required
                                    /></td>
                                    </tr></div>
                            </div>

                            <div class="float-child1bl">
                                <div>
                                    <tr><td>Age/Sex</td><td><div style={{ marginLeft: "900%" }}>:</div></td><td><div style={{ marginLeft: "24%" }}><input
                                        name="perage"
                                        type="text"
                                        id="perage"
                                        value={perage}
                                        onChange={(e) => handleageChange(e)}
                                        required
                                    /></div></td>
                                    </tr></div>
                                <div>
                                    <tr><td>Bill Date</td><td><div style={{ marginLeft: "960%" }}>:</div></td><td><div style={{ marginLeft: "25%" }}><input
                                        name="perbd"
                                        type="text"
                                        id="perbd"
                                        value={perbd}
                                        onChange={(e) => handlebdChange(e)}
                                        required
                                    />
                                    </div></td>
                                    </tr></div>
                                <div>
                                    <tr><td>Room No.</td><td><div style={{ marginLeft: "870%" }}>:</div></td><td><div style={{ marginLeft: "22.5%" }}><input
                                        name="perroom"
                                        type="text"
                                        id="perroom"
                                        value={perroom}
                                        onChange={(e) => handleroomChange(e)}
                                        required
                                    /></div></td>
                                    </tr></div>
                                <div><tr>
                                    <td>D.O.A && Time</td><td>:</td>
                                    <td><input
                                        name="perdoa"
                                        type="text"
                                        id="perdoa"
                                        value={perdoa}
                                        onChange={(e) => handledoaChange(e)}
                                        required
                                    />
                                    </td></tr>
                                </div>
                                <div>
                                    <tr><td>D.O.D && Time</td><td>:</td><td><input
                                        name="perdod"
                                        type="text"
                                        id="perdod"
                                        value={perdod}
                                        onChange={(e) => handledodChange(e)}
                                        required
                                    /></td>
                                    </tr></div>

                            </div>

                        </div>
                        <br />  <br />  <br />  <br />  <br /> <br />  <br />  <br />  <br />
                        <label htmlFor="service" style={{ marginTop: "5%", textDecoration: "underline", fontWeight: "bold" }}>EMR charges</label>
                        {emrList.map((value, index) => (
                            <div key={index} className="services">
                                <div className="first-division" id="boxalign">
                                    <div>
                                        <p>Date</p><input
                                            name="emrdate"
                                            type="text"
                                            id="emrdate"
                                            value={value.emrdate}
                                            onChange={(e) => handleEmrChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Service</p>
                                        <input
                                            name="emrservice"
                                            type="text"
                                            id="emrservice"
                                            value={value.emrservice}
                                            onChange={(e) => handleEmrChange(e, index)}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <p>Charges</p>
                                        <input
                                            name="emrchr"
                                            type="text"
                                            id="emrchr"
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
                                            placeholder="Enter zero if No value"
                                            value={value.emrqty}
                                            onChange={(e) => handleEmrChange(e, index)}
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
                        <label htmlFor="service" style={{ textDecoration: "underline", fontWeight: "bold" }}>Ward charges</label>
                        {wardList.map((value, index) => (
                            <div key={index} className="services">
                                <div className="first-division" id="boxalign">
                                    <div>
                                        <p>Date</p><input
                                            name="warddate"
                                            type="text"
                                            id="warddate"
                                            value={value.warddate}
                                            onChange={(e) => handleWardChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Service</p>
                                        <input
                                            name="wardservice"
                                            type="text"
                                            id="wardservice"
                                            value={value.wardservice}
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
                        <label htmlFor="service" style={{ textDecoration: "underline", fontWeight: "bold" }}>Consultation charges</label>
                        {conList.map((value, index) => (
                            <div key={index} className="services">
                                <div className="first-division" id="boxalign">
                                    <div>
                                        <p>Date</p><input
                                            name="condate"
                                            type="text"
                                            id="condate"
                                            value={value.condate}
                                            onChange={(e) => handleConChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Service</p>
                                        <input
                                            name="conservice"
                                            type="text"
                                            id="conservice"
                                            value={value.conservice}
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
                        <label htmlFor="service" style={{ textDecoration: "underline", fontWeight: "bold" }}>Service charges</label>
                        {serList.map((value, index) => (
                            <div key={index} className="services">
                                <div className="first-division" id="boxalign">
                                    <div>
                                        <p>Date</p><input
                                            name="serdate"
                                            type="text"
                                            id="serdate"
                                            value={value.serdate}
                                            onChange={(e) => handleSerChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Service</p>
                                        <input
                                            name="serservice"
                                            type="text"
                                            id="serservice"
                                            value={value.serservice}
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
                        <label htmlFor="service" style={{ textDecoration: "underline", fontWeight: "bold" }}>Laboratory charges</label>
                        {labList.map((value, index) => (
                            <div key={index} className="services">
                                <div className="first-division" id="boxalign">
                                    <div>
                                        <p>Date</p><input
                                            name="labdate"
                                            type="text"
                                            id="labdate"
                                            value={value.labdate}
                                            onChange={(e) => handleLabChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Service</p>
                                        <input
                                            name="labservice"
                                            type="text"
                                            id="labservice"
                                            value={value.labservice}
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
                        <label htmlFor="service" style={{ textDecoration: "underline", fontWeight: "bold" }}>Pharmacy charges</label>
                        {pharList.map((value, index) => (
                            <div key={index} className="services">
                                <div className="first-division1" id="boxalign1">
                                    <div>
                                        <p>Date</p><input
                                            name="phardate"
                                            type="text"
                                            id="phardate"
                                            value={value.phardate}
                                            onChange={(e) => handlePharChange(e, index)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <p>Service</p>
                                        <input
                                            name="pharservice"
                                            type="text"
                                            id="pharservice"
                                            value={value.pharservice}
                                            onChange={(e) => handlePharChange(e, index)}
                                            required
                                        />
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
                                            type="text"
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
                        <br/>
                        <tr>
                                        <td>Total Advance paid</td><td> <div style={{ marginLeft: "630%" }}>:</div></td><td>
                                            <div style={{ marginLeft: "17%" }} ><input
                                                name="advance"
                                                type="number"
                                                id="advance"
                                                value={advance}
                                                onChange={(e) => handleadvanceChange(e)}
                                                required
                                            />
                                            </div></td>
                                    </tr>
                                    <tr>
                                        <td>Discount Amount</td><td> <div style={{ marginLeft: "630%" }}>:</div></td><td>
                                            <div style={{ marginLeft: "17%" }} ><input
                                                name="discount"
                                                type="number"
                                                id="discount"
                                                value={discount}
                                                onChange={(e) => handlediscountChange(e)}
                                                required
                                            />
                                            </div></td>
                                    </tr>


                        <br></br>
                        
                        <ReactToPrint
                            trigger={() => {
                                return <button>Print the bill</button>

                            }
                            }
                            content={() => componentRef}

                        />
                    </div>

                    <br />

                </form>
                <br />
                <div  >
                    <div class="print" ref={el => (componentRef = el)}>
                        <div class="float-containerbl" style={{ marginTop: "10%" }}>


                            <div class="float-childbl" >
                                <tr>
                                    <td>Patient Name</td>
                                    <td>:</td>
                                    <td>{pername}</td>
                                </tr>
                                <tr>
                                    <td>Bill No</td>
                                    <td>:</td>
                                    <td>{perbill}</td>
                                </tr>
                                <tr>
                                    <td>IP No</td>
                                    <td>:</td>
                                    <td>{perip}</td>
                                </tr>
                                <tr>
                                    <td>
                                        MR No
                                    </td>
                                    <td>
                                        :
                                    </td>
                                    <td>{permr}</td>
                                </tr>
                                <tr>
                                    <td>Consultant</td>
                                    <td>:</td>
                                    <td>{percon}</td>
                                </tr>
                            </div>

                            <div class="float-child1bl">
                                <tr>
                                    <td>Age/Sex</td>
                                    <td>:</td>
                                    <td>{perage}</td>
                                </tr>
                                <tr>
                                    <td>Bill Date</td>
                                    <td>:</td>
                                    <td>{perbd}</td>
                                </tr>
                                <tr>
                                    <td>Room No.</td>
                                    <td>:</td>
                                    <td>{perroom}</td>
                                </tr>
                                <tr>
                                    <td>D.O.A & Time</td>
                                    <td>:</td>
                                    <td>{perdoa}</td>
                                </tr>
                                <tr>
                                    <td>D.O.D & Time</td>
                                    <td>:</td>
                                    <td>{perdod}</td>
                                </tr>

                            </div>

                        </div>
                        <br />
                        <div style={{ marginTop: "10%" }}>
                            <div  >
                                <table >


                                    <tr>

                                        <th>Date</th>

                                        <th >Service/Investigation</th>
                                        <th>Batch No.</th>
                                        <th>Exp.Dt</th>
                                        <th>Charges</th>
                                        <th>Qty</th>
                                        <th>Amount</th>

                                    </tr>

                                    <tr>
                                        <div style={{ textDecoration: "underline", marginLeft: "2%" }}>
                                            EMR charges
                                        </div>
                                    </tr>
                                    <tr>
                                        <td>
                                            {emrList &&
                                                emrList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.emrdate && value.emrdate}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {emrList &&
                                                emrList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.emrservice && value.emrservice}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            {emrList &&
                                                emrList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.emrchr && value.emrchr}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {emrList &&
                                                emrList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.emrqty && value.emrqty}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {emrList &&
                                                emrList.map((value, index) => (
                                                    <div key={index}>

                                                        {<div>{total = parseInt(value.emrchr) * parseInt(value.emrqty)}</div>


                                                        }


                                                    </div>

                                                ))}
                                        </td>

                                    </tr>

                                    <tr>
                                        <td>  </td>
                                        <td>  </td>
                                        <td>  </td>
                                        <td>  </td>
                                        <td>  </td>
                                        <td></td>
                                        <td>Sub Total:{total1}</td>
                                    </tr>
                                    <tr><div style={{ textDecoration: "underline", marginLeft: "2%" }}>Ward Charges</div></tr>
                                    <tr>
                                        <td>
                                            {wardList &&
                                                wardList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.warddate && value.warddate}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {wardList &&
                                                wardList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.wardservice && value.wardservice}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            {wardList &&
                                                wardList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.wardchr && value.wardchr}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {wardList &&
                                                wardList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.wardqty && value.wardqty}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {wardList &&
                                                wardList.map((value, index) => (
                                                    <div key={index}>

                                                        {<div>{wardtotal = parseInt(value.wardchr) * parseInt(value.wardqty)}</div>


                                                        }

                                                    </div>

                                                ))}
                                        </td>

                                    </tr>
                                    <br></br>
                                    <tr>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                        <td> </td>
                                        <td>sub Total:{wardtotal1}</td>
                                    </tr>
                                    <tr>
                                        <div style={{ textDecoration: "underline", marginLeft: "2%" }}>
                                            Consultation charges
                                        </div>
                                    </tr>

                                    <tr>
                                        <td>
                                            {conList &&
                                                conList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.condate && value.condate}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {conList &&
                                                conList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.conservice && value.conservice}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            {conList &&
                                                conList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.conchr && value.conchr}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {conList &&
                                                conList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.conqty && value.conqty}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {conList &&
                                                conList.map((value, index) => (
                                                    <div key={index}>

                                                        {<div>{contotal = parseInt(value.conchr) * parseInt(value.conqty)}</div>


                                                        }

                                                    </div>

                                                ))}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>sub Total:{contotal1}</td>
                                    </tr>
                                    <tr>
                                        <div style={{ textDecoration: "underline", marginLeft: "2%" }}>
                                            Service charges
                                        </div>
                                    </tr>
                                    <tr>
                                        <td>
                                            {serList &&
                                                serList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.serdate && value.serdate}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {serList &&
                                                serList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.serservice && value.serservice}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            {serList &&
                                                serList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.serchr && value.serchr}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {serList &&
                                                serList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.serqty && value.serqty}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {serList &&
                                                serList.map((value, index) => (
                                                    <div key={index}>

                                                        {<div>{sertotal = parseInt(value.serchr) * parseInt(value.serqty)}</div>


                                                        }
                                                    </div>

                                                ))}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>sub Total:{sertotal1}</td>
                                    </tr>
                                    <tr>
                                        <div style={{ textDecoration: "underline", marginLeft: "2%" }}>
                                            Laboratory charges
                                        </div>
                                    </tr>
                                    <tr>
                                        <td>
                                            {labList &&
                                                labList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.labdate && value.labdate}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {labList &&
                                                labList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.labservice && value.labservice}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>

                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            {labList &&
                                                labList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.labchr && value.labchr}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {labList &&
                                                labList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.labqty && value.labqty}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {labList &&
                                                labList.map((value, index) => (
                                                    <div key={index}>

                                                        {<div>{labtotal = parseInt(value.labchr) * parseInt(value.labqty)}</div>


                                                        }
                                                    </div>

                                                ))}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>sub Total:{labtotal1}</td>
                                    </tr>
                                    <tr>
                                        <div style={{ textDecoration: "underline", marginLeft: "2%" }}>
                                            Pharmacy charges
                                        </div>
                                    </tr>
                                    <tr>
                                        <td>
                                            {pharList &&
                                                pharList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.phardate && value.phardate}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {pharList &&
                                                pharList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.pharservice && value.pharservice}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {pharList &&
                                                pharList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.pharbatch && value.pharbatch}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {pharList &&
                                                pharList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.pharexp && value.pharexp}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {pharList &&
                                                pharList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.pharchr && value.pharchr}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {pharList &&
                                                pharList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.pharqty && value.pharqty}

                                                    </div>

                                                ))}
                                        </td>
                                        <td>
                                            {pharList &&
                                                pharList.map((value, index) => (
                                                    <div key={index}>

                                                        {<div>{phartotal = parseInt(value.pharchr) * parseInt(value.pharqty)}</div>


                                                        }

                                                    </div>

                                                ))}
                                        </td>

                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>sub Total:{phartotal1}</td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><hr /></td>
                                    </tr>



                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Total:{total1 + wardtotal1 + contotal1 + sertotal1 + labtotal1 + phartotal1}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Total Advance Paid:{advance}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>Discount Amount:{discount}</td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>balance Due:{(total1 + wardtotal1 + contotal1 + sertotal1 + labtotal1 + phartotal1)-(advance)-(discount)}</td>
                                    </tr>
                                </table>

                            </div>


                        </div>





                    </div>


                </div>
            </div>
        </div>
    );
}

export default Bill;