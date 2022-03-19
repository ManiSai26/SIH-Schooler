import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./Containers/LandingPage";
import LoginPage from './Containers/LoginPage';
import SignupPage from './Containers/SignupPage';
function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Signup" element={<SignupPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
