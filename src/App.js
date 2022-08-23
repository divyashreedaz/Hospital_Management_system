
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Certificates from './Certificates';
import Homepage from "./Homepage";



function App() {
  return (
    <Router>
      <div >
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Certificates" element={<Certificates />} />
         
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
