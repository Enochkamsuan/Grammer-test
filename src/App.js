import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/navigation/header";
import Footer from "./component/navigation/footer";
import RoutePage from "./config/routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RoutePage />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
