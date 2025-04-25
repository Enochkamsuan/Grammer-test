import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/navigation/header";
import RoutePage from "./config/routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutePage />
    </BrowserRouter>
  );
}

export default App;
