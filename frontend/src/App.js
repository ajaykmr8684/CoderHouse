import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';
const isAuth = false;
const user = {
  activated : true
}
const App = () => {
  return (
    <>
    <Router>
      <Navigation/>
        <Routes>
            {/* Guest Routes */}
            <Route path="/" element={<GuestRoute Component={Home}/>} exact></Route>
            <Route path="/authenticate" element={<GuestRoute Component={Authenticate}/>}></Route>

            {/* Semi Protected Routes */}
            <Route path="/activate" element={<SemiProtectedRoute Component={Activate}/>}></Route>

            {/* Protected Routes */}
            <Route path="/rooms" element={<ProtectedRoute Component={Rooms}/>}></Route>

        </Routes>
    </Router>
    </>
  )
}

const GuestRoute = ({Component}) => {
  if(isAuth) {
   return <Navigate to="/rooms"/>
  }
  else {
    return <Component/>
  }
}

const SemiProtectedRoute = ({Component}) => {
  if(!isAuth) {
    return <Navigate to="/"/>
  }
  else if(isAuth && !user.activated) {
    return <Component/>
  }
  else {
    return <Navigate to="/rooms"/>
  }
}

const ProtectedRoute = ({Component}) => {
  if(!isAuth) {
    return <Navigate to="/"/>
  }
  else if(isAuth && !user.activated) {
    return <Navigate to="/activate"/>
  }
  else {
    return <Component/>
  }
}


export default App;
