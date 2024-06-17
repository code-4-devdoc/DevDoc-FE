import './App.css';
import {Route, Routes} from "react-router-dom";
import Index from "./pages/ResumePage/ResumePage"

function App({ baseUrl }) {
  return (
    <div>
      <Routes>
      <Route exact path="/" element={ <Index baseUrl={baseUrl} /> }/>
      </Routes>
    </div>
  );
}

export default App;