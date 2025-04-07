import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
//import Login from "./pages/Login";
// import Register from "./pages/Register";
import JobListings from "./pages/JobListings";
// import PostJob from "./pages/PostJob";
import './css/Global.css';

function App() {
  return (
    <div className="app-container">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<JobListings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

