import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Main from './components/main/Main';
import {
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sidebar />}></Route>
      </Routes>
      <Main/>
    </div>
  );
}

export default App;
