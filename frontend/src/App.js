import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

const App = () => {
  return (
    <>
    <Router>
      <Navigation/>
        <Routes>
            <Route path="/" element={<Home/>} exact></Route>
            <Route path="/register" element={<Register/>} exact></Route>
            <Route path="/login" element={<Login/>} exact></Route>
        </Routes>
    </Router>
    </>
  )
}
export default App;
