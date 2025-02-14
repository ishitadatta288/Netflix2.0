import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";  // Your Home Page
import Login from "./components/Login";  // Your SignUp Page
import Browser from "./components/Browse";
import { Toaster } from 'react-hot-toast';
import MovieDialog from "./components/MovieDialog";


function App() {
  return (
    <Router>
      <Toaster/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browser />} />
        <Route path="/browse/:movieId" element={<MovieDialog />} />

      </Routes>
    </Router>
    
  );
}

export default App;
