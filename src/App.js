import "./App.css";
import SideBar from "./components/SideBar";
import MainPanel from "./components/MainPanel";

function App() {
  return (
    <div className="flex antialiased min-h-screen bg-taskDo-gray h-screen">
      <SideBar />
      <MainPanel />
    </div>
  );
}

export default App;
