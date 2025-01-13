import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NewIncome from "./pages/NewIncome";
import NewExpense from "./pages/NewExpense";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="newincome" element={<NewIncome />}></Route>
          <Route path="newexpense" element={<NewExpense />}></Route>
          <Route path="home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
