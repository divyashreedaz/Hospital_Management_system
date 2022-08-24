import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import "./styles.css";
import "react-datepicker/dist/react-datepicker.css";
class Certificates extends Component {
  state = {
    Name: "",
    Age: "",
    Gender: "Mr",
    sex: "",
    Docname: "",
    Vecno: "",
    Job: "",
    startDate: "",
    hemo: "",
    RBC: "",
    WBC: "",
    neut: "",
    lymp: "",
    eosi: "",
    mono: "",
    baso: "",
    pcv: "",
    mcv: "",
    mch: "",
    mchc: "",
    prbc: "",
    pwbc: "",
    plat: "",
    certificate: {
      MC: true,
      CBP: false,
      PFT: false
    }


  };
  chkclicked = (e) => {
    var { name, checked } = e.target;
    console.log(name + checked)
    this.setState((e) => {
      var Selectedcert = e.certificate;
      return Selectedcert[name] = checked;

    });
  };

  render() {
    function cbp(h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z) {
      return (

        <div >
          <div class="float-container" style={{marginTop:"15%"}}>
    

            <div class="float-child" >
              <div>NAME:{h}</div>
              <div>AGE:{i}</div>
            </div>

            <div class="float-child1">
              <div >SEX:{j}</div>
              <div >DATE:{k}</div>
            </div>

          </div>
          <div style={{ marginTop: "5%", marginLeft: "35%", textDecoration: "underline" }}>
            COMPLETE BLOOD PICTURE
          </div>

          <div>
            <div class="wrapper">
              <div class="box1" >
                <table id="tb1">
                  <tr>
                    <th id="id1" style={{ textDecoration: "underline" }}>Investigation</th>
                    <th id="id2"></th>
                    <th id="id3" style={{ textDecoration: "underline" }}>Result</th>
                  </tr>
                  <tr>
                    <td>HAEMOGLOBIN</td>
                    <td>:</td>
                    <td>{l}</td>
                  </tr>
                  <tr>
                    <td>RBC</td>
                    <td>:</td>
                    <td>{m}</td>
                  </tr>
                  <tr>
                    <td>WBC</td>
                    <td>:</td>
                    <td>{n}</td>
                  </tr>

                  <tr>
                    <th style={{ textDecoration: "underline" }} >DIFFERENTIAL COUNT</th>

                  </tr>
                  <tr>
                    <td>NEUTROPHILS</td>
                    <td>:</td>
                    <td>{o}</td>
                  </tr>
                  <tr>
                    <td>LYMPHOCYTES</td>
                    <td>:</td>
                    <td>{p}</td>
                  </tr>
                  <tr>
                    <td>EOSINOPHILS</td>
                    <td>:</td>
                    <td>{q}</td>
                  </tr>
                  <tr>
                    <td>MONOCYTES</td>
                    <td>:</td>
                    <td>{r}</td>
                  </tr>
                  <tr>
                    <td>BASOPHILES</td>
                    <td>:</td>
                    <td>{s}</td>
                  </tr>
                  <tr>
                    <td>PCV</td>
                    <td>:</td>
                    <td>{t}</td>
                  </tr>
                  <tr>
                    <td>MCV</td>
                    <td>:</td>
                    <td>{u}</td>
                  </tr>
                  <tr>
                    <td>MCH</td>
                    <td>:</td>
                    <td>{v}</td>
                  </tr>
                  <tr>
                    <td>MCHC</td>
                    <td>:</td>
                    <td>{w}</td>
                  </tr>

                </table>

              </div>
              <div style={{ marginLeft: "10%" }} class="box3">
                <th>NORMAL RANGE</th>
                <div style={{ marginLeft: "5%" }}>
                  <tr>MALE 12.0-18.0g%</tr>
                  <tr>FEMALE 11.0-13.0g%</tr>
                  <tr>4.5-5.5 Mill/Cu mm</tr>
                  <div style={{ marginTop: "4%" }}>4000-11,000/Cu mm</div>
                </div>
              </div>
              <div style={{ marginTop: "10%" }} class="box4">
                <div class="float-container">

                  <div class="float-child">
                    <th style={{ marginLeft: "-2%" }}>ADULTS</th>
                    <div style={{ marginLeft: "15%" }}>
                      <tr>40-75%</tr>
                      <tr>20-40%</tr>
                      <tr>01-06%</tr>
                      <tr>02-10%</tr>
                      <tr>0-2%</tr>
                    </div>

                  </div>

                  <div class="float-child1">
                    <th>CHILDREN</th>
                    <tr>20-40%</tr>
                    <tr>40-60%</tr>
                    <tr>01-08%</tr>
                    <tr>02-06%</tr>
                    <tr>0-2%</tr>
                  </div>

                </div>

              </div>
              <div class="box5" style={{ marginTop: "7%" }}>
                <table>
                  <tr>
                    <th>PERIPHERAL SMEAR EXAMINATION</th>

                  </tr>
                  <tr>
                    <td>RBC</td>
                    <td>:</td>
                    <td>{x}</td>
                  </tr>
                  <tr>
                    <td>WBC</td>
                    <td>:</td>
                    <td>{y}</td>
                  </tr>
                  <tr>
                    <td>PLATELET COUNT</td>
                    <td>:</td>
                    <td>{z}</td>
                  </tr>
                </table>
                <div style={{ marginTop: "6%", fontSize: "90%" }}>
                  METHOD: RBC, WBC,PLT - AUTOMATED CELL COUNTER BY ELECTRICAL IMPEDANCE MENTHOD
                </div>
                <div style={{ marginLeft: "10%", marginTop: "1%" }}>
                  MCH,MCHC,MCB-CALCULATED
                </div>
                <div style={{ marginLeft: "10%", marginTop: "1%" }}>
                  Hb-COLORIMETRIC METHOD
                </div>
                <div style={{ marginLeft: "10%", marginTop: "1%" }}>
                  DC,PERIPHERAL SMEAR-MICROSCOPY
                </div>
                <div>
                  <div class="float-container">

                    <div class="float-child">
                      <div>CHECKED BY</div>

                    </div>

                    <div class="float-child1">
                      <div >AUTHORISED SIGNATORY</div>

                    </div>

                  </div>
                </div>
                <div style={{ marginLeft: "25%" }}>
                  *********END OF REPORT*********
                </div>
              </div>
              <div style={{ marginLeft: "30%", marginTop: "2%" }} class="box6">
                <div>40-50 Vol%</div>
                <div style={{ marginTop: "3%" }}>83-101 fl</div>
                <div style={{ marginTop: "3%" }}>27-32 pg</div>
                <div style={{ marginTop: "3%" }}>31-34%</div>

              </div>

            </div>
          </div>

          <div style={{marginTop:"15%",marginLeft:"10%",fontSize:"120%",color:"red"}}>
            Plot No.D-84, Mahadevapuram, Gajularamaram Road, Kukatpally Hyderabad-55.
          </div>
          <div style={{fontSize:"100%",color:"blue",marginLeft:"%"}}>
            Email id: shraddhaglobalhospitals2019@gmail.com, <b style={{color:"green"}}>Website: shraddhaglobalhospitals.com</b>
          </div>



        </div>
      )
    }
    function mc(a, b, c, d, e, f, g) {
      return (
        <div >

          <div style={{ fontSize: "150%", marginLeft: "70%", marginTop: "2%", fontFamily: "monospace", fontWeight: "bold" }}>date:{a}</div>

          <div style={{ fontSize: "250%", marginLeft: "35%", marginTop: "5%", fontFamily: "monospace", fontWeight: "bold" }}>MEDICAL CERTIFICATE</div>

          <hr></hr><div style={{ fontSize: "160%", marginTop: "7%" }}> I,Dr. {b}</div>



          <div>
            <div id="mc" style={{ marginTop: "6%" }}> Here by certified that I have carefully reviewed medical reports of </div>
            <div id="mc" style={{ marginTop: "2%" }}> {c}. {d}/{e}Yr, VEH NO. {f} who is </div>
            <div id="mc" style={{ marginTop: "2%" }}> employed in SEA HAWK TRAVELS </div>
            <div id="mc" style={{ marginTop: "5%" }}>Based on physical examination and medical reports, he is not having any </div>
            <div id="mc" style={{ marginTop: "2%" }}> diseases</div>
            <div id="mc" style={{ marginTop: "6%" }}> It is certified that he is FIT for {g}</div>
            <div style={{ marginTop: "10%", fontSize: "150%", marginLeft: "70%" }}>
              Signature
            </div>
            <hr style={{ width: "40%", marginLeft: "60%", marginTop: "4%" }}></hr>
          </div>
          <div style={{marginTop:"45%",marginLeft:"5%",fontSize:"120%",color:"red"}}>
            Plot No.D-84, Mahadevapuram, Gajularamaram Road, Kukatpally Hyderabad-55.
          </div>
          <div style={{fontSize:"100%",marginLeft:"5%",color:"blue"}}>
            Email id: shraddhaglobalhospitals2019@gmail.com, <b style={{color:"green"}}>Website: shraddhaglobalhospitals.com</b>
          </div>

        </div>
      )
    }

    return (
      <div>

        <div style={{ fontSize: "150%" }}>
          <input type="checkbox" name="MC" onChange={this.chkclicked} defaultChecked={true} />MC
          <input style={{ marginLeft: "1%" }} type="checkbox" name="CBP" onChange={this.chkclicked} />CBP
          {/* <input style={{ marginLeft: "1%" }} type="checkbox" name="PFT" onChange={this.chkclicked} />PFT */}
        </div>
        {(() => {
          if (this.state.certificate.MC == true && this.state.certificate.CBP == true && this.state.certificate.PFT == true) {
            return (
              <div className="App">
                <div className="Meta">
                  <h1>MC CBP PFT</h1>
                  <p>Please enter your name.</p>
                  <input
                    type="text"
                    placeholder="Please enter your name..."
                    value={this.state.Name}
                    onChange={(e) => {
                      this.setState({ Name: e.target.value });
                    }}
                  />
                  <p> Please enter your age</p>
                  <input
                    type="text"
                    placeholder="Please enter your name..."
                    value={this.state.Age}
                    onChange={(e) => {
                      this.setState({ age: e.target.value });
                    }}
                  />
                  <br />
                  <ReactToPrint
                    trigger={() => {
                      return <button>print the certificate</button>

                    }
                    }
                    content={() => this.componentRef}
                    documentTitle='new document'
                    pageStyle="print"
                  />

                </div>

                <div id="downloadWrapper" ref={el => (this.componentRef = el)}>
                  <div id="certificateWrapper">
                    <div >MEDICAL CERTIFICATE</div>
                    This is to certify that <p>{this.state.Name}</p>
                    <div id="certificate">
                      {/* <img src="https://i.imgur.com/srTnpvp.jpg" alt="Certificate" /> */}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          else if (this.state.certificate.MC == true && this.state.certificate.CBP == true) {
            return (
              <div className="App">
                <div className="Meta">
                  <h1>MC CBP</h1>
                  <div class="float-container">

                    <div class="float-child2">
                      <p>NAME</p>
                      <input
                        type="text"
                        placeholder="Please enter your value..."
                        value={this.state.Name}
                        onChange={(e) => {
                          this.setState({ Name: e.target.value });
                        }}
                      />
                      <p>AGE</p>
                      <input
                        type="text"
                        placeholder="Please enter your value..."
                        value={this.state.Age}
                        onChange={(e) => {
                          this.setState({ Age: e.target.value });
                        }}
                      />
                    </div>

                    <div class="float-child3">
                      <p style={{ marginLeft: "-50%" }}>SEX</p>
                      <input
                        type="text"
                        placeholder="Please enter your value..."
                        value={this.state.sex}
                        onChange={(e) => {
                          this.setState({ sex: e.target.value });
                        }}
                      />
                      <p style={{ marginLeft: "-50%" }}>DATE</p>
                      <input
                        type="text"
                        placeholder="Please enter your value..."
                        value={this.state.startDate}
                        onChange={(e) => {
                          this.setState({ startDate: e.target.value });
                        }}
                      />
                    </div>

                  </div>
                  <br /><br /><br /><br /><br /><br /><br />
                  <h1>Medical certificate</h1>

                  <p>Please enter Doctor name.</p>
                  <input
                    type="text"
                    placeholder="Please enter Doctor name..."
                    value={this.state.Docname}
                    onChange={(e) => {
                      this.setState({ Docname: e.target.value });
                    }}
                  />
                  <p>Please enter gender.</p>
                  <select placeholder="Please enter Doctor name..." value={this.state.Gender} onChange={(e) => {
                    this.setState({ Gender: e.target.value });
                  }}>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                  </select>



                  <p>Please enter Vechicle number</p>
                  <input
                    type="text"
                    placeholder="Please enter vechicle no..."
                    value={this.state.Vecno}
                    onChange={(e) => {
                      this.setState({ Vecno: e.target.value });
                    }}
                  />
                  <p>Please enter Job</p>
                  <input
                    type="text"
                    placeholder="Please enter Job..."
                    value={this.state.Job}
                    onChange={(e) => {
                      this.setState({ Job: e.target.value });
                    }}
                  />
                  <h1>CBP Form</h1>

                  <p>HAEMOGLOBIN</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.hemo}
                    onChange={(e) => {
                      this.setState({ hemo: e.target.value });
                    }}
                  />
                  <p>RBC</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.RBC}
                    onChange={(e) => {
                      this.setState({ RBC: e.target.value });
                    }}
                  />
                  <p>WBC</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.WBC}
                    onChange={(e) => {
                      this.setState({ WBC: e.target.value });
                    }}
                  />
                  <p>NEUTROPHILS</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.neut}
                    onChange={(e) => {
                      this.setState({ neut: e.target.value });
                    }}
                  />
                  <p>LYMPHOCYTES</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.lymp}
                    onChange={(e) => {
                      this.setState({ lymp: e.target.value });
                    }}
                  />
                  <p>EOSINOPHILS</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.eosi}
                    onChange={(e) => {
                      this.setState({ eosi: e.target.value });
                    }}
                  />
                  <p>MONOCYTES</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.mono}
                    onChange={(e) => {
                      this.setState({ mono: e.target.value });
                    }}
                  />
                  <p>BASOPHILES</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.baso}
                    onChange={(e) => {
                      this.setState({ baso: e.target.value });
                    }}
                  />
                  <p>PCV</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.pcv}
                    onChange={(e) => {
                      this.setState({ pcv: e.target.value });
                    }}
                  />
                  <p>MCV</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.mcv}
                    onChange={(e) => {
                      this.setState({ mcv: e.target.value });
                    }}
                  />
                  <p>MCH</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.mch}
                    onChange={(e) => {
                      this.setState({ mch: e.target.value });
                    }}
                  />
                  <p>MCHC</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.mchc}
                    onChange={(e) => {
                      this.setState({ mchc: e.target.value });
                    }}
                  />
                  <p>RBC</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.prbc}
                    onChange={(e) => {
                      this.setState({ prbc: e.target.value });
                    }}
                  />
                  <p>WBC</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.pwbc}
                    onChange={(e) => {
                      this.setState({ pwbc: e.target.value });
                    }}
                  />
                  <p>PLATELET COUNT</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.plat}
                    onChange={(e) => {
                      this.setState({ plat: e.target.value });
                    }}
                  />
                  <br />
                  <ReactToPrint
                    trigger={() => {
                      return <button>print the certificate</button>

                    }
                    }
                    content={() => this.componentRef}
                    documentTitle='new document'
                    pageStyle="print"
                  />

                </div>

                <div id="downloadWrapper" ref={el => (this.componentRef = el)}>
                  <div id="certificateWrapper">
                    {mc(this.state.startDate, this.state.Docname, this.state.Gender, this.state.Name, this.state.Age, this.state.Vecno, this.state.Job)}
                   
                  </div>
                  <div className='pagebreak'  id="certificateWrapcbp">
                  <br/>      <br/>   
                    {cbp(this.state.Name, this.state.Age, this.state.sex, this.state.startDate, this.state.hemo, this.state.RBC, this.state.WBC, this.state.neut, this.state.lymp, this.state.eosi, this.state.mono, this.state.baso, this.state.pcv, this.state.mcv, this.state.mch, this.state.mchc, this.state.prbc, this.state.pwbc, this.state.plat)}
                  </div>
                </div>
              </div>
            )
          }
          else if (this.state.certificate.MC == true && this.state.certificate.PFT == true) {
            return (
              <div className="App">
                <div className="Meta">
                  <h1>MC PFT</h1>
                  <p>Please enter your name.</p>
                  <input
                    type="text"
                    placeholder="Please enter your name..."
                    value={this.state.Name}
                    onChange={(e) => {
                      this.setState({ Name: e.target.value });
                    }}
                  />
                  <p> Please enter your doctorname</p>
                  <input
                    type="text"
                    placeholder="Please enter your name..."
                    value={this.state.age}
                    onChange={(e) => {
                      this.setState({ age: e.target.value });
                    }}
                  />
                  <br />
                  <ReactToPrint
                    trigger={() => {
                      return <button>print the certificate</button>

                    }
                    }
                    content={() => this.componentRef}
                    documentTitle='new document'
                    pageStyle="print"
                  />

                </div>

                <div id="downloadWrapper" ref={el => (this.componentRef = el)}>
                  <div id="certificateWrapper">
                    <div >MEDICAL FITNESS CERTIFICATE</div>
                    This is to certify that <p>{this.state.Name}</p>
                    <div id="certificate">
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          else if (this.state.certificate.CBP == true && this.state.certificate.PFT == true) {
            return (
              <div className="App">
                <div className="Meta">
                  <h1>CBP PFT</h1>
                  <p>Please enter your name.</p>
                  <input
                    type="text"
                    placeholder="Please enter your name..."
                    value={this.state.Name}
                    onChange={(e) => {
                      this.setState({ Name: e.target.value });
                    }}
                  />
                  <p> Please enter your doctorname</p>
                  <input
                    type="text"
                    placeholder="Please enter your name..."
                    value={this.state.age}
                    onChange={(e) => {
                      this.setState({ age: e.target.value });
                    }}
                  />
                  <br />
                  <ReactToPrint
                    trigger={() => {
                      return <button>print the certificate</button>

                    }
                    }
                    content={() => this.componentRef}
                    documentTitle='new document'
                    pageStyle="print"
                  />

                </div>

                <div id="downloadWrapper" ref={el => (this.componentRef = el)}>
                  <div id="certificateWrapper">
                    <div >MEDICAL CERTIFICATE</div>
                    This is to certify that <p>{this.state.Name}</p>
                    <div id="certificate">
                      {/* <img src="https://i.imgur.com/srTnpvp.jpg" alt="Certificate" /> */}
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          else if (this.state.certificate.MC == true) {
            return (
              <div className="App">
                <div className="Meta">
                  <h1>MEDICAL FITNESS CERTIFICATE</h1>
                  <p>Date</p>
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    value={this.state.startDate}
                    onChange={(e) => {
                      this.setState({ startDate: e.target.value });
                    }}
                  />
                  <p>Please enter Doctor name.</p>
                  <input
                    type="text"
                    placeholder="Please enter Doctor name..."
                    value={this.state.Docname}
                    onChange={(e) => {
                      this.setState({ Docname: e.target.value });
                    }}
                  />
                  <p>Please enter gender.</p>
                  <select placeholder="Please enter Doctor name..." value={this.state.Gender} onChange={(e) => {
                    this.setState({ Gender: e.target.value });
                  }}>
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                  </select>
                  <p>Please enter name.</p>
                  <input
                    type="text"
                    placeholder="Please enter name..."
                    value={this.state.Name}
                    onChange={(e) => {
                      this.setState({ Name: e.target.value });
                    }}
                  />

                  <p>Please enter age.</p>
                  <input
                    type="text"
                    placeholder="Please enter age..."
                    value={this.state.Age}
                    onChange={(e) => {
                      this.setState({ Age: e.target.value });
                    }}
                  />

                  <p>Please enter Vechicle number</p>
                  <input
                    type="text"
                    placeholder="Please enter vechicle no..."
                    value={this.state.Vecno}
                    onChange={(e) => {
                      this.setState({ Vecno: e.target.value });
                    }}
                  />
                  <p>Please enter Job</p>
                  <input
                    type="text"
                    placeholder="Please enter Job..."
                    value={this.state.Job}
                    onChange={(e) => {
                      this.setState({ Job: e.target.value });
                    }}
                  />
                  <br />
                  <ReactToPrint
                    trigger={() => {
                      return <button>print the certificate</button>

                    }
                    }
                    content={() => this.componentRef}
                    documentTitle='new document'
                    pageStyle="print"
                  />

                </div>

                <div id="downloadWrapper" ref={el => (this.componentRef = el)}>
                  <div id="certificateWrapper">


                    <div id="certificate">

                      {mc(this.state.startDate, this.state.Docname, this.state.Gender, this.state.Name, this.state.Age, this.state.Vecno, this.state.Job)}

                    </div>
                  </div>
                </div>
              </div>

            )
          }

          else if (this.state.certificate.CBP == true) {
            return (
              <div className="App">
                <div className="Meta">
                  <h1>CBP Form</h1>
                  <div class="float-container">

                    <div class="float-child2">
                      <p>NAME</p>
                      <input
                        type="text"
                        placeholder="Please enter your value..."
                        value={this.state.Name}
                        onChange={(e) => {
                          this.setState({ Name: e.target.value });
                        }}
                      />
                      <p>AGE</p>
                      <input
                        type="text"
                        placeholder="Please enter your value..."
                        value={this.state.Age}
                        onChange={(e) => {
                          this.setState({ Age: e.target.value });
                        }}
                      />
                    </div>

                    <div class="float-child3">
                      <p style={{ marginLeft: "-50%" }}>SEX</p>
                      <input
                        type="text"
                        placeholder="Please enter your value..."
                        value={this.state.sex}
                        onChange={(e) => {
                          this.setState({ sex: e.target.value });
                        }}
                      />
                      <p style={{ marginLeft: "-50%" }}>DATE</p>
                      <input
                        type="text"
                        placeholder="Please enter your value..."
                        value={this.state.startDate}
                        onChange={(e) => {
                          this.setState({ startDate: e.target.value });
                        }}
                      />
                    </div>

                  </div>
                  <br /> <br /> <br /> <br /> <br /> <br />
                  <br /> <br />
                  <p>HAEMOGLOBIN</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.hemo}
                    onChange={(e) => {
                      this.setState({ hemo: e.target.value });
                    }}
                  />
                  <p>RBC</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.RBC}
                    onChange={(e) => {
                      this.setState({ RBC: e.target.value });
                    }}
                  />
                  <p>WBC</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.WBC}
                    onChange={(e) => {
                      this.setState({ WBC: e.target.value });
                    }}
                  />
                  <p>NEUTROPHILS</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.neut}
                    onChange={(e) => {
                      this.setState({ neut: e.target.value });
                    }}
                  />
                  <p>LYMPHOCYTES</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.lymp}
                    onChange={(e) => {
                      this.setState({ lymp: e.target.value });
                    }}
                  />
                  <p>EOSINOPHILS</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.eosi}
                    onChange={(e) => {
                      this.setState({ eosi: e.target.value });
                    }}
                  />
                  <p>MONOCYTES</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.mono}
                    onChange={(e) => {
                      this.setState({ mono: e.target.value });
                    }}
                  />
                  <p>BASOPHILES</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.baso}
                    onChange={(e) => {
                      this.setState({ baso: e.target.value });
                    }}
                  />
                  <p>PCV</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.pcv}
                    onChange={(e) => {
                      this.setState({ pcv: e.target.value });
                    }}
                  />
                  <p>MCV</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.mcv}
                    onChange={(e) => {
                      this.setState({ mcv: e.target.value });
                    }}
                  />
                  <p>MCH</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.mch}
                    onChange={(e) => {
                      this.setState({ mch: e.target.value });
                    }}
                  />
                  <p>MCHC</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.mchc}
                    onChange={(e) => {
                      this.setState({ mchc: e.target.value });
                    }}
                  />
                  <p>RBC</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.prbc}
                    onChange={(e) => {
                      this.setState({ prbc: e.target.value });
                    }}
                  />
                  <p>WBC</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.pwbc}
                    onChange={(e) => {
                      this.setState({ pwbc: e.target.value });
                    }}
                  />
                  <p>PLATELET COUNT</p>
                  <input
                    type="text"
                    placeholder="Please enter your value..."
                    value={this.state.plat}
                    onChange={(e) => {
                      this.setState({ plat: e.target.value });
                    }}
                  />
                  <br />

                  <ReactToPrint
                    trigger={() => {
                      return <button>print the certificate</button>

                    }
                    }
                    content={() => this.componentRef}
                    documentTitle='new document'
                    pageStyle="print"
                  />

                </div>

                <div id="downloadWrapper" ref={el => (this.componentRef = el)}>
                  <div id="certificateWrap">


                    {cbp(this.state.Name, this.state.Age, this.state.sex, this.state.startDate, this.state.hemo, this.state.RBC, this.state.WBC, this.state.neut, this.state.lymp, this.state.eosi, this.state.mono, this.state.baso, this.state.pcv, this.state.mcv, this.state.mch, this.state.mchc, this.state.prbc, this.state.pwbc, this.state.plat)}


                  </div>
                </div>
              </div>

            )
          }

          else {
            return (
              <div className="App">
                <h1>CBP</h1>
                <p>Please enter your name.</p>
                <input
                  type="text"
                  placeholder="Please enter your name..."
                  value={this.state.Name}
                  onChange={(e) => {
                    this.setState({ Name: e.target.value });
                  }}
                />

              </div>
            )
          }


        })()}

      </div>
    );
  }
}

export default Certificates;
