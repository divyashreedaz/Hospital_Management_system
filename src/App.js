import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import ReactToPrint from "react-to-print";

import "react-datepicker/dist/react-datepicker.css";
class App extends Component {
  state = {
    Name: "",
    Age: "",
    Gender: "Mr",
    Docname: "",
    Vecno: "",
    Job: "",
    startDate: "",
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


    return (
      <div>

        <div style={{ fontSize: "150%" }}>
          <input type="checkbox" name="MC" onChange={this.chkclicked} defaultChecked={true} />MC
          <input style={{ marginLeft: "1%" }} type="checkbox" name="CBP" onChange={this.chkclicked} />CBP
          <input style={{ marginLeft: "1%" }} type="checkbox" name="PFT" onChange={this.chkclicked} />PFT
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
                  <p>Please enter your name.</p>
                  <input
                    type="text"
                    placeholder="Please enter your name..."
                    value={this.state.Name}
                    onChange={(e) => {
                      this.setState({ Name: e.target.value });
                    }}
                  />
                  <p> Please enter your gender</p>
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
                  <h1>Medical certificate</h1>
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
                      <div style={{ fontSize: "150%", marginLeft: "70%", marginTop: "2%", fontFamily: "monospace", fontWeight: "bold" }}>date:{this.state.startDate}</div>
                      {/* <img src="https://i.imgur.com/srTnpvp.jpg" alt="Certificate" /> */}
                      <div style={{ fontSize: "250%", marginLeft: "35%", marginTop: "5%", fontFamily: "monospace", fontWeight: "bold" }}>MEDICAL CERTIFICATE</div>

                      <hr></hr><div style={{ fontSize: "160%", marginTop: "7%" }}> I,Dr. {this.state.Docname} </div>



                      <div>
                        <div id="mc" style={{ marginTop: "6%" }}> Here by certified that I have carefully reviewed medical reports of </div>
                        <div id="mc" style={{ marginTop: "2%" }}> {this.state.Gender}. {this.state.Name}/{this.state.Age}Yr, VEH NO. {this.state.Vecno} who is </div>
                        <div id="mc" style={{ marginTop: "2%" }}> employed in SEA HAWK TRAVELS </div>
                        <div id="mc" style={{ marginTop: "5%" }}>Based on physical examination and medical reports, he is not having any </div>
                        <div id="mc" style={{ marginTop: "2%" }}> diseases</div>
                        <div id="mc" style={{ marginTop: "6%" }}> It is certified that he is FIT for {this.state.Job} </div>
                        <div style={{ marginTop: "10%", fontSize: "150%", marginLeft: "70%" }}>
                          Signature
                        </div>
                        <hr style={{ width: "40%", marginLeft: "60%", marginTop: "4%" }}></hr>
                      </div>

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
                  <p>HAEMOGLOBIN</p>
                  <input
                    type="text"
                    placeholder="Please enter your name..."
                    value={this.state.Name}
                    onChange={(e) => {
                      this.setState({ Name: e.target.value });
                    }}
                  />
                  <p>RBC</p>
                  <input
                    type="text"
                    placeholder="Please enter your name..."
                    value={this.state.Name}
                    onChange={(e) => {
                      this.setState({ Name: e.target.value });
                    }}
                  />
                  <p>WBC</p>
                  <input
                    type="text"
                    placeholder="Please enter your name..."
                    value={this.state.Name}
                    onChange={(e) => {
                      this.setState({ Name: e.target.value });
                    }}
                  />
                  <p>NEUTROPHILS</p>
                  <input
                    type="text"
                    placeholder="Please enter your name..."
                    value={this.state.Name}
                    onChange={(e) => {
                      this.setState({ Name: e.target.value });
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
                      <div class="float-container">

                        <div class="float-child">
                          <div>NAME:</div>
                          <div>AGE:</div>
                        </div>

                        <div class="float-child1">
                          <div >SEX:</div>
                          <div >DATE:</div>
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
    <th id="id1" style={{textDecoration:"underline"}}>Investigation</th>
    <th id="id2"></th>
    <th id="id3" style={{textDecoration:"underline"}}>Result</th>
  </tr>
  <tr>
    <td>HAEMOGLOBIN</td>
    <td>:</td>
    <td>15.1g%</td>
  </tr>
  <tr>
    <td>RBC</td>
    <td>:</td>
    <td>5.5Cu mm</td>
  </tr>
  <tr>
    <td>WBC</td>
    <td>:</td>
    <td>7500 Cu mm</td>
  </tr>

  <tr>
    <th style={{textDecoration:"underline"}} >DIFFERENTIAL COUNT</th>
    
  </tr>
  <tr>
    <td>NEUTROPHILS</td>
    <td>:</td>
    <td>56%</td>
  </tr>
  <tr>
    <td>LYMPHOCYTES</td>
    <td>:</td>
    <td>37%</td>
  </tr>
  <tr>
    <td>EOSINOPHILS</td>
    <td>:</td>
    <td>2%</td>
  </tr>
  <tr>
    <td>MONOCYTES</td>
    <td>:</td>
    <td>4%</td>
  </tr>
  <tr>
    <td>BASOPHILES</td>
    <td>:</td>
    <td>0%</td>
  </tr>
  <tr>
    <td>PCV</td>
    <td>:</td>
    <td>43vol%</td>
  </tr>
  <tr>
    <td>MCV</td>
    <td>:</td>
    <td>91fl</td>
  </tr>
  <tr>
    <td>MCH</td>
    <td>:</td>
    <td>33pg</td>
  </tr>
  <tr>
    <td>MCHC</td>
    <td>:</td>
    <td>37%</td>
  </tr>
  
</table>

                          </div>
                          <div style={{marginLeft:"10%"}} class="box3">
                           <th>NORMAL RANGE</th>
                           <tr>MALE 12.0-18.0g%</tr>
                           <tr>FEMALE 11.0-13.0g%</tr>
                           <tr>4.5-5.5 Mill/Cu mm</tr>
                           <div style={{marginTop:"4%"}}>4000-11,000/Cu mm</div>
                          </div>
                          <div style={{marginLeft:"-10%"}} class="box4">
                          <div style={{marginTop:"-10%"}}class="float-container">

                        <div class="float-child">
                          <th>ADULTS</th>
                          <tr>40-75%</tr>
                          <tr>40-75%</tr>
                          <tr>40-75%</tr>
                          <tr>40-75%</tr>
                          <tr>40-75%</tr>
                          
                        </div>

                        <div class="float-child1">
                        <th>CHILDREN</th>
                          <tr>40-75%</tr>
                          <tr>40-75%</tr>
                          <tr>40-75%</tr>
                          <tr>40-75%</tr>
                          <tr>40-75%</tr>
                        </div>

                      </div>

                          </div>
                          <div class="box5">
                          <table>
                          <tr>
    <th>PERIPHERAL SMEAR EXAMINATION</th>
    
  </tr>
  <tr>
    <td>RBC</td>
    <td>:</td>
    <td>NORMOCYTIC NORMOCHROMIC</td>
  </tr>
  <tr>
    <td>WBC</td>
    <td>:</td>
    <td>WITHIN NORMAL LIMITS</td>
  </tr>
  <tr>
    <td>PLATELET COUNT</td>
    <td>:</td>
    <td>2.5 LAKHS/Cu mm &nbsp; &nbsp; 1,50,000-4,50,000/Cu mm</td>
  </tr>
  </table>
  <div style={{marginTop:"6%"}}>
  METHOD: RBC, WBC,PLT - AUTOMATED CELL COUNTER BY ELECTRICAL IMPEDANCE MENTHOD
  </div>
  <div style={{marginLeft:"10%",marginTop:"1%"}}>
  MCH,MCHC,MCB-CALCULATED
  </div>
  <div style={{marginLeft:"10%",marginTop:"1%"}}>
  Hb-COLORIMETRIC METHOD
  </div>
 <div style={{marginLeft:"10%",marginTop:"1%"}}>
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
<div style={{marginLeft:"25%"}}>
*********END OF REPORT*********
</div>
                          </div>
                          <div style={{marginLeft:"30%",marginTop:"-30%"}}class="box6">
                          <div>40-50 Vol%</div>
                          <div style={{marginTop:"3%"}}>83-101 fl</div>
                          <div style={{marginTop:"3%"}}>27-32 pg</div>
                          <div style={{marginTop:"3%"}}>31-34%</div>
                         
                          </div>

                        </div>
                      </div>





                    </div>
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

export default App;
