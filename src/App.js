import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewPizza from "./pages/NewPizza";
import EditPizza from "./pages/EditPizza";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewPizza />} />
        <Route path="/:id/edit" element={<EditPizza />} />
      </Routes>
    </div>
  );
}

export default App;
