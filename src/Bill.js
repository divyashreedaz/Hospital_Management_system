import React from "react"
import { useState, useEffect, useRef } from "react";
import "./Bill.css";
import ReactToPrint from "react-to-print";
import axios from 'axios'
import Navbar from "./Navbar/Navbar";
import Emrcharges from "./Emrcharges";
import Wardcharges from "./Wardcharges";
import Concharges from "./Concharges";
import Servicecharges from "./Servicecharges";
import Labcharges from "./Labcharges";
import Pharcharges from "./Pharcharges";
function Bill() {
    let componentRef = useRef(null);
    let componentphar = useRef(null);
    let componentlab = useRef(null);
    var total1 = 0;
    var total = 0;
    var wardtotal1 = 0;
    var wardtotal = 0;
    var contotal1 = 0;
    var contotal = 0;
    var sertotal1 = 0;
    var sertotal = 0;
    var labtotal1 = 0;
    var labtotal = 0;
    var phartotal1 = 0;
    var phartotal = 0;
    const [emrList, setEmrList] = useState([{ emrdate: "", emrservice: "Registration Charges", emrbatch: "", emrexp: "", emrchr: "500", emrqty: "1" }]);
    const [wardList, setWardList] = useState([{ warddate: "", wardservice: "ER", wardbatch: "", wardexp: "", wardchr: "4000", wardqty: "1" }]);
    const [conList, setConList] = useState([{ condate: "", conservice: "ER", conbatch: "", conexp: "", conchr: "4000", conqty: "1" }]);
    const [serList, setSerList] = useState([{ serdate: "", serservice: "ER", serbatch: "", serexp: "", serchr: "4000", serqty: "1" }]);
    const [labList, setLabList] = useState([{ labdate: "", labservice: "ER", labbatch: "", labexp: "", labchr: "4000", labqty: "1" }]);
    const [pharList, setPharList] = useState([{ phardate: "", pharservice: "", pharbatch: "", pharexp: "", pharchr: "0", pharqty: "1" }]);
    const [pername, setPername] = useState('');
    const [perbill, setPerbill] = useState('');
    const [perip, setPerip] = useState('');
    const [permr, setPermr] = useState('');
    const [percon, setPercon] = useState('');
    const [perage, setPerage] = useState('');
    const [perbd, setPerbd] = useState('');
    const [perroom, setPerroom] = useState('');
    const [perdpt, setPerdpt] = useState('');
    const [peradd, setPeradd] = useState('');
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
        setPername(event.target.value);
    };
    const handledummyChange = event => {
        setPerdummy(event.target.value);
    };
    const handlebdChange = event => {
        setPerbd(event.target.value);
    };
    const handledptChange = event => {
        setPerdpt(event.target.value);
    };
    const handleaddChange = event => {
        setPeradd(event.target.value);
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
    {
        emrList &&
            emrList.map((value, index) => (
                <div key={index}>
                    {total1 += parseFloat(value.emrchr) * parseFloat(value.emrqty)}
                </div>
            ))
    }
    {
        wardList &&
            wardList.map((value, index) => (
                <div key={index}>
                    {wardtotal1 += parseFloat(value.wardchr) * parseFloat(value.wardqty)}
                </div>
            ))
    }
    {
        conList &&
            conList.map((value, index) => (
                <div key={index}>
                    {contotal1 += parseFloat(value.conchr) * parseFloat(value.conqty)}
                </div>
            ))
    }
    {
        serList &&
            serList.map((value, index) => (
                <div key={index}>
                    {sertotal1 += parseFloat(value.serchr) * parseFloat(value.serqty)}
                </div>
            ))
    }
    {
        labList &&
            labList.map((value, index) => (
                <div key={index}>
                    {labtotal1 += parseFloat(value.labchr) * parseFloat(value.labqty)}
                </div>
            ))
    }
    {
        pharList &&
            pharList.map((value, index) => (
                <div key={index}>
                    {phartotal1 += parseFloat(value.pharchr) * parseFloat(value.pharqty)}
                </div>
            ))
    }
    const EmrDisplay = () => {
        return <Emrcharges emrList={emrList} setEmrList={setEmrList} />;
    };
    const WardDisplay = () => {
        return <Wardcharges wardList={wardList} setWardList={setWardList} />;
    };
    const ConDisplay = () => {
        return <Concharges conList={conList} setConList={setConList} />;
    };
    const SerDisplay = () => {
        return <Servicecharges serList={serList} setSerList={setSerList} />;
    };
    const LabDisplay = () => {
        return <Labcharges labList={labList} setLabList={setLabList} />;
    };
    const PharDisplay = () => {
        return <Pharcharges pharList={pharList} setPharList={setPharList} />;
    };
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
                                <div>
                                    <tr><td>Address</td><td><div style={{ marginLeft: "350%" }}>:</div></td><td><div style={{ marginLeft: "8%" }}><input
                                        name="peradd"
                                        type="text"
                                        id="peradd"
                                        value={peradd}
                                        onChange={(e) => handleaddChange(e)}
                                        required
                                    /></div></td>
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
                                <div><tr>
                                    <td>Bill date</td><td><div style={{ marginLeft: "990%" }}>:</div></td>
                                    <td><div style={{ marginLeft: "28%" }}><input
                                        name="perbd"
                                        type="datetime-local"
                                        id="perbd"
                                        value={perbd}
                                        onChange={(e) => handlebdChange(e)}
                                        required
                                    /></div>
                                    </td></tr>
                                </div>
                                <div>
                                    <tr><td>Room No.</td><td><div style={{ marginLeft: "870%" }}>:</div></td><td><div style={{ marginLeft: "22%" }}><input
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
                                        type="datetime-local"
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
                                        type="datetime-local"
                                        id="perdod"
                                        value={perdod}
                                        onChange={(e) => handledodChange(e)}
                                        required
                                    /></td>
                                    </tr></div>
                                <div>
                                    <tr><td>Department</td><td><div style={{ marginLeft: "480%" }}>:</div></td><td><div style={{ marginLeft: "11%" }}><input
                                        name="perdpt"
                                        type="text"
                                        id="perdpt"
                                        value={perdpt}
                                        onChange={(e) => handledptChange(e)}
                                        required
                                    /></div></td>
                                    </tr></div>
                            </div>
                        </div>
                        <br />  <br />  <br />  <br />  <br /> <br />  <br />  <br />  <br /><br />
                        <label htmlFor="service" style={{ marginTop: "5%", textDecoration: "underline", fontWeight: "bold" }}>EMR charges</label>
                        {EmrDisplay()}
                        <label htmlFor="service" style={{ textDecoration: "underline", fontWeight: "bold" }}>Ward charges</label>
                        {WardDisplay()}
                        <label htmlFor="service" style={{ textDecoration: "underline", fontWeight: "bold" }}>Consultation charges</label>
                        {ConDisplay()}
                        <label htmlFor="service" style={{ textDecoration: "underline", fontWeight: "bold" }}>Service charges</label>
                        {SerDisplay()}
                        <label htmlFor="service" style={{ textDecoration: "underline", fontWeight: "bold" }}>Laboratory charges</label>
                        {LabDisplay()}
                        <label htmlFor="service" style={{ textDecoration: "underline", fontWeight: "bold" }}>Pharmacy charges</label>
                        {PharDisplay()}
                        <br />
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
                        <ReactToPrint
                            trigger={() => {
                                return <button style={{ marginLeft: "2%" }}>Print the pharmacy bill</button>
                            }
                            }
                            content={() => componentphar}
                        />
                        <ReactToPrint
                            trigger={() => {
                                return <button style={{ marginLeft: "2%" }}>Print the lab bill</button>
                            }
                            }
                            content={() => componentlab}
                        />
                    </div>
                    <br />
                </form>
                <br />
                <div  >
                    <div class="print" ref={el => (componentRef = el)}>
                        <div class="float-containerbl" style={{ marginTop: "25%" }}>
                            <div style={{ textAlign: "center", fontSize: "150%", fontWeight: "bold", marginBottom: "4%" }}>Discharge Breakup Bill</div>
                            <div class="float-childbl" style={{ marginLeft: "5%", marginRight: "5%" }} >
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
                                <tr>
                                    <td>Address</td>
                                    <td>:</td>
                                    <td>{peradd}</td>
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
                                <tr>
                                    <td>Department</td>
                                    <td>:</td>
                                    <td>{perdpt}</td>
                                </tr>
                            </div>
                        </div>
                        <br />
                        <div style={{ marginTop: "10%", marginLeft: "5%", marginRight: "4%" }}>
                            <div  >
                                <table style={{ fontSize: "90%" }}>
                                    <tr>
                                        <th>Date</th>
                                        <th >Service/
                                            <br />Investigation</th>
                                        <th>Batch No.</th>
                                        <th>Exp.Dt</th>
                                        <th>Charges</th>
                                        <th>Quantity</th>
                                        <th>Amount</th>
                                    </tr>
                                    <tr>
                                        <td colspan="5">
                                            <div style={{ textDecoration: "underline" }}>
                                                EMR charges
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
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
                                        <td >
                                        </td>
                                        <td>
                                        </td>
                                        <td id="tablecontent">
                                            {emrList &&
                                                emrList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.emrchr && value.emrchr}
                                                    </div>
                                                ))}
                                        </td>
                                        <td id="tablecontent">
                                            {emrList &&
                                                emrList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.emrqty && value.emrqty}
                                                    </div>
                                                ))}
                                        </td>
                                        <td >
                                            {emrList &&
                                                emrList.map((value, index) => (
                                                    <div key={index}>
                                                        {<div>{total = parseFloat(value.emrchr) * parseFloat(value.emrqty)}</div>}
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
                                        <td style={{ fontWeight: "bold" }}>Sub Total:{total1}</td>
                                    </tr>
                                    <tr><td colspan="5"><div style={{ textDecoration: "underline" }}>Ward Charges</div>
                                    </td></tr>
                                    <tr>
                                        <td >
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
                                        <td id="tablecontent">
                                            {wardList &&
                                                wardList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.wardchr && value.wardchr}
                                                    </div>
                                                ))}
                                        </td>
                                        <td id="tablecontent">
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
                                                        {<div>{wardtotal = parseFloat(value.wardchr) * parseFloat(value.wardqty)}</div> }
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
                                        <td style={{ fontWeight: "bold" }}>Sub Total:{wardtotal1}</td>
                                    </tr>
                                    <tr >
                                        <td colSpan="5">
                                            <div style={{ textDecoration: "underline" }}>
                                                Consultation charges
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td >
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
                                        <td >
                                        </td>
                                        <td >
                                        </td>
                                        <td id="tablecontent">
                                            {conList &&
                                                conList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.conchr && value.conchr}
                                                    </div>
                                                ))}
                                        </td>
                                        <td id="tablecontent">
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
                                                        {<div>{contotal = parseFloat(value.conchr) * parseFloat(value.conqty)}</div>}
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
                                        <td style={{ fontWeight: "bold" }}>Sub Total:{contotal1}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div style={{ textDecoration: "underline" }}>
                                                Service charges
                                            </div>
                                        </td>
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
                                        <td >
                                            {serList &&
                                                serList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.serservice && value.serservice}
                                                    </div>
                                                ))}
                                        </td>
                                        <td >
                                        </td>
                                        <td >
                                        </td>
                                        <td id="tablecontent">
                                            {serList &&
                                                serList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.serchr && value.serchr}
                                                    </div>
                                                ))}
                                        </td>
                                        <td id="tablecontent">
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
                                                        {<div>{sertotal = parseFloat(value.serchr) * parseFloat(value.serqty)}</div>}
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
                                        <td style={{ fontWeight: "bold" }}>Sub Total:{sertotal1}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div style={{ textDecoration: "underline" }}>
                                                Laboratory charges
                                            </div>
                                        </td>
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
                                        <td id="tablecontent">
                                            {labList &&
                                                labList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.labchr && value.labchr}
                                                    </div>
                                                ))}
                                        </td>
                                        <td id="tablecontent">
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
                                                        {<div>{labtotal = parseFloat(value.labchr) * parseFloat(value.labqty)}</div>                                                        }
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
                                        <td style={{ fontWeight: "bold" }}>Sub Total:{labtotal1}</td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div style={{ textDecoration: "underline" }}>
                                                Pharmacy charges
                                            </div>
                                        </td>
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
                                        <td id="tablecontent">
                                            {pharList &&
                                                pharList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.pharchr && value.pharchr}
                                                    </div>
                                                ))}
                                        </td>
                                        <td id="tablecontent">
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
                                                        {<div>{phartotal = parseFloat(value.pharchr) * parseFloat(value.pharqty)}</div>}
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
                                        <td style={{ fontWeight: "bold" }} >Sub Total:{phartotal1}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><hr style={{ width: "80%", marginLeft: "-10%" }}></hr></td>
                                    </tr>
                                    <thead><br /><br /><br /></thead>
                                    <br /><br />
                                    <tr style={{ marginTop: "5%" }}>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td ><td style={{ fontWeight: "bold" }}>Total</td><td>:</td><td style={{ fontWeight: "bold" }}>{total1 + wardtotal1 + contotal1 + sertotal1 + labtotal1 + phartotal1}</td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><td style={{ fontWeight: "bold" }}>Total Advance Paid</td><td>:</td><td style={{ fontWeight: "bold" }}>{advance}</td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><td style={{ fontWeight: "bold" }}>Discount Amount</td><td>:</td><td style={{ fontWeight: "bold" }}>{discount}</td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><td style={{ fontWeight: "bold" }}>Total Amount</td><td>:</td><td style={{ fontWeight: "bold" }}>{(total1 + wardtotal1 + contotal1 + sertotal1 + labtotal1 + phartotal1) - (advance) - (discount)}</td></td>
                                    </tr>
                                    <tfoot><br /><br /><br /><br /><br /><br /></tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
                {/* ---------------------------pharmacy----------------------- */}
                <div  >
                    <div class="print" ref={el => (componentphar = el)}>
                        <div class="float-containerbl" style={{ marginTop: "25%" }}>
                            <div style={{ textAlign: "center", fontSize: "150%", fontWeight: "bold", marginBottom: "4%" }}>Pharmacy Bill</div>
                            <div class="float-childbl" style={{ marginLeft: "5%", marginRight: "2%" }} >
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
                                <tr>
                                    <td>Address</td>
                                    <td>:</td>
                                    <td>{peradd}</td>
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
                                <tr>
                                    <td>Department</td>
                                    <td>:</td>
                                    <td>{perdpt}</td>
                                </tr>
                            </div>
                        </div>
                        <br />
                        <div style={{ marginTop: "10%", marginLeft: "5%", marginRight: "4%" }}>
                            <div  >
                                <table >
                                    <tr>
                                        <th>Date</th>
                                        <th >Service/
                                            <br />Investigation</th>
                                        <th>Batch No.</th>
                                        <th>Exp.Dt</th>
                                        <th>Charges</th>
                                        <th>Quantity</th>
                                        <th>Amount</th>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div style={{ textDecoration: "underline" }}>
                                                Pharmacy charges
                                            </div>
                                        </td>
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
                                        <td id="tablecontent">
                                            {pharList &&
                                                pharList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.pharchr && value.pharchr}
                                                    </div>
                                                ))}
                                        </td>
                                        <td id="tablecontent">
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
                                                        {<div>{phartotal = parseFloat(value.pharchr) * parseFloat(value.pharqty)}</div>}
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
                                        <td style={{ fontWeight: "bold" }}>Sub Total:{phartotal1}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><hr style={{ width: "80%", marginLeft: "-10%" }}></hr></td>
                                    </tr>
                                    <thead><br /><br /><br /></thead>
                                    <br /><br />
                                    <tr style={{ marginTop: "5%" }}>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td ><td style={{ fontWeight: "bold" }}>Total</td><td>:</td><td style={{ fontWeight: "bold" }}>{phartotal1}</td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><td style={{ fontWeight: "bold" }}>Total Advance Paid</td><td>:</td><td style={{ fontWeight: "bold" }}>{advance}</td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><td style={{ fontWeight: "bold" }}>Discount Amount</td><td>:</td><td style={{ fontWeight: "bold" }}>{discount}</td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><td style={{ fontWeight: "bold" }}>Total Amount</td><td>:</td><td style={{ fontWeight: "bold" }}>{(phartotal1) - (advance) - (discount)}</td></td>
                                    </tr>
                                    <tfoot><br /><br /><br /><br /><br /><br /></tfoot>
                                </table>
                            </div>
                        </div>
                    </div>
                </div><br /><br />
                {/* --------------------------lab-------------------------- */}
                <div  >
                    <div class="print" ref={el => (componentlab = el)}>
                        <div class="float-containerbl" style={{ marginTop: "25%" }}>
                            <div style={{ textAlign: "center", fontSize: "150%", fontWeight: "bold", marginBottom: "4%" }}>Laboratory Bill</div>
                            <div class="float-childbl" style={{ marginLeft: "5%", marginRight: "5%" }} >
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
                                <tr>
                                    <td>Address</td>
                                    <td>:</td>
                                    <td>{peradd}</td>
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
                                <tr>
                                    <td>Department</td>
                                    <td>:</td>
                                    <td>{perdpt}</td>
                                </tr>
                            </div>
                        </div>
                        <br />
                        <div style={{ marginTop: "10%", marginLeft: "5%", marginRight: "4%" }}>
                            <div  >
                                <table >
                                    <tr>
                                        <th>Date</th>
                                        <th >Service/
                                            <br />Investigation</th>
                                        <th>Batch No.</th>
                                        <th>Exp.Dt</th>
                                        <th>Charges</th>
                                        <th>Quantity</th>
                                        <th>Amount</th>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <div style={{ textDecoration: "underline" }}>
                                                Laboratory charges
                                            </div>
                                        </td>
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
                                        <td id="tablecontent">
                                            {labList &&
                                                labList.map((value, index) => (
                                                    <div key={index}>
                                                        {value.labchr && value.labchr}
                                                    </div>
                                                ))}
                                        </td>
                                        <td id="tablecontent">
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
                                                        {<div>{labtotal = parseFloat(value.labchr) * parseFloat(value.labqty)}</div>}
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
                                        <td style={{ fontWeight: "bold" }}>Sub Total:{labtotal1}</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><hr style={{ width: "80%", marginLeft: "-10%" }}></hr></td>
                                    </tr>
                                    <thead><br /><br /><br /></thead>
                                    <br /><br />
                                    <tr style={{ marginTop: "5%" }}>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td ><td style={{ fontWeight: "bold" }}>Total</td><td>:</td><td style={{ fontWeight: "bold" }}>{labtotal1}</td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><td style={{ fontWeight: "bold" }}>Total Advance Paid</td><td>:</td><td style={{ fontWeight: "bold" }}>{advance}</td></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><td style={{ fontWeight: "bold" }}>Discount Amount</td><td>:</td><td style={{ fontWeight: "bold" }}>{discount}</td></td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><td style={{ fontWeight: "bold" }}>Total Amount</td><td>:</td><td style={{ fontWeight: "bold" }}>{(labtotal1) - (advance) - (discount)}</td></td>
                                    </tr>
                                    <tfoot><br /><br /><br /><br /><br /><br /></tfoot>
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