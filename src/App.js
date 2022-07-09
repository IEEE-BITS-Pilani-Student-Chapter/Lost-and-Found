import "./CSS-Components/App.css";
import SignUp from "./JS-Components/SignUp";
import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import LNF from "./JS-Components/LNF";
import Categories from "./JS-Components/Categories";
import Home from "./JS-Components/Home";
import Developers from "./JS-Components/Developers";
import Profile from "./JS-Components/Profile";

function App() {
  return (
    <div>
      <Main />
      {/* lost or found form page */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route exact path="categories" element={<Categories />}></Route>

        {/* navigate to lost form */}
        <Route exact path="lost" element={<LNF l_or_f="l" />}></Route>

        {/* navigate to found form */}
        <Route exact path="found" element={<LNF l_or_f="f" />}></Route>

        {/* navigate to developers' page */}
        <Route exact path="developers" element={<Developers />}></Route>

        {/* navigate to profile page */}
        <Route exact path="profile" element={<Profile />}></Route>

        <Route exact path="signin" element={<SignUp todo="SIGN IN" />} />
        <Route exact path="signup" element={<SignUp todo="SIGN UP" />} />
      </Routes>
    </div>
  );
}

export default App;
