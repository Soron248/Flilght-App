import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SingleFlightView from "./features/SingleFlightView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches/:id" element={<SingleFlightView />} />
      </Routes>
    </div>
  );
}

export default App;
