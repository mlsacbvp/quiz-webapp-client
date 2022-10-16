import "./App.css";
import "./global.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login.js'
import Lounge from "./components/Lounge/Lounge";
import Home from "./pages/Home/Home"
import SignUp from "./pages/SignUp/SignUp";
import Waiting from "./pages/Waiting/Waiting";
import Result from "./pages/Result/Result";
import Landingpage from "./pages/Landingpage/Landingpage";
import Quizpage from "./pages/QuizOngoing/quizpage";
// import Lounge from "./components/Lounge";

function App() {
    return(
    // <Router>
    //     <Routes>
    //         <Route path="/" exact="exact" element={<Home />}/>
    //         <Route path="/signup" element={<SignUp/>}/>
    //         <Route path="/login" element={<Login/>}/>
    //         <Route path="/waiting" element={<Waiting/>}/>
    //         <Route path="/Result" element={<Result/>}/>
    //         <Route path="/landing" element={<Landingpage/>}/>
    //         <Route path="/quiz" element={<Quizpage/>}/>
    //         <Route path="/lounge" element={<Lounge/>}/>
    //     </Routes>
    // </Router>
    <div>
        <Lounge/>
    </div>
    );
};

export default App;
