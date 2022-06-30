import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Todo from './components/Todo';
import Login from './components/Login';
import Signup from './components/Signup';
import React,{useState,useEffect} from 'react';
import {auth} from './firebase'
function App() {
  const [user,setUser] = useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)
    })
  },[])
  
  return (
    <Router>
      <NavBar user={user} />
      <Switch>
        <Route exact path="/">
           <Todo user={user} />
        </Route>
        <Route path="/login">
           <Login />
        </Route>
        <Route path="/signup">
           <Signup />
        </Route>
           <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
