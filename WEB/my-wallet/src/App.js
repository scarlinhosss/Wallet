import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import TransactionPage from "./pages/TransactionPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="transaction/:transactionId" element={<TransactionPage/>}></Route>
          <Route path="home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
