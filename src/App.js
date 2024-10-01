import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import TaskLayout from "./layouts/TaskLayout";
// import CalendarLayout from "./layouts/CalendarLayout";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<TaskLayout />}></Route>
        {/* <Route path="/calendar" element={<CalendarLayout />}></Route> */}
        <Route path="*" element={<h1>404: Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
