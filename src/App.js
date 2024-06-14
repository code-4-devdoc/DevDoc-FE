import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import ResumeList from "./pages/ResumeListPage/ResumeList"
import ResumePage from "./pages/ResumePage/ResumePage"

function App({ baseUrl }) {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate to="/resumes" />} />
        <Route exact path="/resumes" element={<ResumeList baseUrl={baseUrl} />} />
        <Route exact path="/resumes/:resumeId" element={<ResumePage baseUrl={baseUrl} />} />
      </Routes>
    </div>
  );
}

export default App;