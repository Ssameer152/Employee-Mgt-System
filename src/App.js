import "./App.css";
import Home from "./components/Home/Home";
import Router from "./routes";

const App = () => {
  return (
    <div className="App">
      <Home />
      <Router />
    </div>
  );
};

export default App;
