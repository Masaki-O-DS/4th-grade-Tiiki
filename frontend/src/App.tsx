import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashBoardPage from "./pages/DashBoardPage";
import BottomTab from "./BottomTab";
import SchedulePage from "./pages/SchedulePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashBoardPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
      <BottomTab />
    </Router>
  );
}

export default App;
