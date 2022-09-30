
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Certificates from './Certificates';
import Homepage from "./Homepage";
import Pharmacyform from "./Pharmacyform";
import Labtest from "./Labtest";
import Bill from "./Bill"
import Consultant from "./Consultant"

function App() {
  return (
    <Router>
      <div >
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
    </Router>
  );
}

export default App;
