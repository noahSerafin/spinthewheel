import './App.css';
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <HashRouter>
    <Layout>
      <Routes>
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Layout>
  </HashRouter>
  );
}

export default App;
