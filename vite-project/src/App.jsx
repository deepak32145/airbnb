import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Registerpage from "./pages/Registerpage";
import Layout from "./Layout";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Register" element={<Registerpage />} />
      </Route>
    </Routes>
  );
}

export default App;
