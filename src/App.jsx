import { Cart } from './containers';
import { Home, Login, PageNotFound, SignUp } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="app">
      {/* <Home />
      <SignUp /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
