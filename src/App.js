import "./App.css";
import SignUp from "./JS-Components/SignUp";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import LNF from "./JS-Components/LNF";
import Categories from "./JS-Components/Categories";

function App() {
  return (
    <div>
      <Main />
      {/* lost or found form page */}
      <Routes>
          {/* navigate to lost form */}
          <Route exact path="/categories" element={<Categories />}></Route>
          <Route exact path="/lost" element={<LNF l_or_f="l"/>}></Route>

          {/* navigate to found form */}
          <Route exact path="/found" element={<LNF l_or_f="f"/>}></Route>
      </Routes>

        <Routes>
          <Route exact path="/signin" element={<SignUp todo="SIGN IN" />} />
          <Route exact path="/signup" element={<SignUp todo="SIGN UP" />} />
        </Routes>
    </div>
  );
}

export default App;
