import "./App.css";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import Registerpage from "./pages/Registerpage";
import Account from "./pages/Account";
import Layout from "./Layout";
import { UserContextProvider } from "./UserContext";

axios.defaults.baseURL = "http://127.0.0.1:4000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Register" element={<Registerpage />} />
          <Route path="/account/:subpage?" element={<Account />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
