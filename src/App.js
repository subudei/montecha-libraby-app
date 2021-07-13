import "./App.css";
import HomePage from "./pages/Home/HomePage";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BookPage from "./pages/Book/BookPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/works/:id" component={BookPage} />
      </Router>
    </div>
  );
}

export default App;

// yarn add react-router-dom / npm install react-router-dom

//   yarn add sass /  npm install -g sass
//   yarn add react-paginate / npm install react-paginate --save
