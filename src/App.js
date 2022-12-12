import { BrowserRouter } from "react-router-dom";
import Header from './components/header';
import Footer from "./components/footer";
import RegistrationForm from './components/registeration_form';
import './App.css';
function App() {
  return (
    <BrowserRouter>
      <Header/>
    <div className="app">
        <RegistrationForm/>
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
