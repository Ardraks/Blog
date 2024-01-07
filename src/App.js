import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Header from "./Pages/Header";
import Homepage from "./Pages/Homepage";

function App() {
  const currentUser = true;
  return (
    <div className="App">
      <BrowserRouter>
     <Routes>      
     <Route path='/' element={<Login/>}></Route>
     <Route path='/Hompage' element={<Homepage/>}></Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
