
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Certificates from './Certificates';
import Homepage from "./Homepage";
import Bill from './Bill';



function App() {
  return (
    <Router>
      <div >
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Certificates" element={<Certificates />} />
          <Route path="/Bill" element={<Bill />} />
         
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
