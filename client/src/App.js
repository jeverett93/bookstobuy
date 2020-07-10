import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

// rendering main app components with router
function App() {
    return (
        <Router>
            <Navbar />
            <Jumbotron />
            <Route exact path="/" component={Search} />
            <Route exact path="/saved" component={Saved} />
        </Router>
    );
}

// exporting file to be used in other parts of the application
export default App;
