/* eslint-disable no-unused-vars */
 
import './App.css';
import{BrowserRouter as Router,Routes,Route} from "react-router-dom" 
import Navbar from"./components/Navbar";
import Home from "./components/Home";
import Contact from './components/Contact';

function App() {
 
  return (
    <Router>
    <Navbar/>
    <Routes>
   < Route path="/"> element={<Home/>}</Route>
   < Route path="/" >element={<Contact/>}</Route>
   < Route path="/">element={<blog/>}</Route> 
    <Route path="/"> element={<about/>}</Route>
  
    </Routes>
      <h1>React Router DOM</h1> 
    </Router>
  )
}

export default App
