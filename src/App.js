import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";
import ReactToPrint from "react-to-print";  
   
import "react-datepicker/dist/react-datepicker.css";  
class App extends Component {
  state = {
    Name: "",
    Age:"",
    Gender:"Mr",
    Docname:"",
    Vecno:"",
    Job:"",
    startDate:"",
    certificate: {
      MC: true,
      CBP: false,
      PFT: false
    }


  };
  chkclicked = (e) => {
    var { name, checked } = e.target;
    console.log(name+checked)
    this.setState((e) => {
      var Selectedcert = e.certificate;
      return Selectedcert[name] = checked;

    });
  };

  render() {

//console.log(this.state.certificate)
    return (
      <div>
      
        <div style={{fontSize:"150%"}}>
          <input   type="checkbox" name="MC" onChange={this.chkclicked} defaultChecked={true}/>MC
          <input style={{marginLeft:"1%"}}  type="checkbox" name="CBP" onChange={this.chkclicked} />CBP
          <input style={{marginLeft:"1%"}}  type="checkbox" name="PFT" onChange={this.chkclicked} />PFT
        </div>
        {(() => {    
          if(this.state.certificate.MC==true&&this.state.certificate.CBP==true&&this.state.certificate.PFT==true)
          {
            return(
              <div  className="App">
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
          <br/>
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
          else if(this.state.certificate.MC==true&&this.state.certificate.CBP==true)
          {
            return(
              <div  className="App">
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
          <br/>
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
          else if(this.state.certificate.MC==true&&this.state.certificate.PFT==true)
          {
            return(
              <div  className="App">
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
        <br/>
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
          else if(this.state.certificate.CBP==true&&this.state.certificate.PFT==true)
          {
            return(
              <div  className="App">
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
        <br/>
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
              <div  className="App">
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
          <select  placeholder="Please enter Doctor name..." value={this.state.Gender} onChange={(e) => {
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
         <br/>
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
            <div style={{fontSize:"150%",marginLeft:"70%",marginTop:"2%",fontFamily:"monospace",fontWeight:"bold"}}>date:{this.state.startDate}</div>
              {/* <img src="https://i.imgur.com/srTnpvp.jpg" alt="Certificate" /> */}
              <div style={{fontSize:"250%",marginLeft:"35%",marginTop:"5%",fontFamily:"monospace",fontWeight:"bold"}}>MEDICAL CERTIFICATE</div>
           
              <hr></hr><div style={{fontSize:"160%",marginTop:"7%"}}> I,Dr. {this.state.Docname} </div>
           
            
      
            <div>
           <div id="mc" style={{marginTop:"6%"}}> Here by certified that I have carefully reviewed medical reports of </div>  
          <div id="mc" style={{marginTop:"2%"}}> {this.state.Gender}. {this.state.Name}/{this.state.Age}Yr, VEH NO. {this.state.Vecno} who is </div>
          <div id="mc" style={{marginTop:"2%"}}> employed in SEA HAWK TRAVELS </div>
          <div id="mc" style={{marginTop:"5%"}}>Based on physical examination and medical reports, he is not having any </div>
          <div id="mc" style={{marginTop:"2%"}}> diseases</div>
          <div id="mc" style={{marginTop:"6%"}}> It is certified that he is FIT for {this.state.Job} </div>
          <div style={{marginTop:"10%",fontSize:"150%",marginLeft:"70%"}}>
          Signature
          </div>
          <hr style={{width:"40%",marginLeft:"60%",marginTop:"4%"}}></hr>
            </div>

            </div>
          </div>
        </div>
        </div>
                      
                  )
          }
     
          else if(this.state.certificate.PFT==true)
          {
            return(
              <div  className="App">
              <div className="Meta">
          <h1>PFT</h1>
          <p>Please enter your age.</p>
          <input
            type="text"
            placeholder="Please enter your name..."
            value={this.state.Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />
            <br/>
        
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
      
        else{
            return(
              <div  className="App">
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
