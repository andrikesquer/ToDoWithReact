import navBar from "./components/navBar";
import { Route, Routes } from "react-router-dom";
import TaskLayout from "./layouts/TaskLayout";
import CalendarLayout from "./layouts/CalendarLayout";

function App() {
  return (
    <div className="App">
      <navBar></navBar>
      <Routes>
        <Route path="/" element={<navBar />}></Route>
        <Route path="/tasks" element={<TaskLayout />}></Route>
        <Route path="/calendar" element={<CalendarLayout />}></Route>
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </div>
  );
}

export default App;
