
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { AuthProvider } from 'oidc-react';
import Certificates from './Certificates';
import Homepage from "./Homepage";
import Pharmacyform from "./Pharmacyform";
import Labtest from "./Labtest";
import Bill from "./Bill"
import Consultant from "./Consultant"

const oidcConfig = {
  onSignIn: async () => {
    alert(
      "successful"
    );
    window.location.hash = "";
  },
  authority: "https://login.microsoftonline.com/e67c1396-3ce5-4416-a7b8-77a4965b0658/",
  clientId: "b1d8aebf-4f29-4527-abd8-647882a9ee69",
  responseType: "code",
  // redirectUri: "http://localhost:3000/",
  scope: "api://b1d8aebf-4f29-4527-abd8-647882a9ee69/sgh"
 
};

function App() {
  return (
    
    
    <Router>
    <AuthProvider {...oidcConfig}>
      <div >
      {console.log(oidcConfig)}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Certificates" element={<Certificates />} />
         <Route path="/pharmacyform" element={<Pharmacyform />} />
         <Route path="/Labtest" element={<Labtest />} />
         <Route path="/Bill" element={<Bill />} />
         <Route path="/Consultant" element={<Consultant />} />
         
        </Routes>
      </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
