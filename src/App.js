import "./App.css";

import HomePage from "./pages/Home/HomePage";
import BookPage from "./pages/Book/BookPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

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
