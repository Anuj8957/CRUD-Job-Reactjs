import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import NotFound from './components/pages/NotFound';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import View from './components/users/View';

function App() {
  return (
    <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/" component ={Home}/>
            <Route exact path="/about" component ={About}/>
            <Route exact path="/contact" component ={Contact}/>
            <Route exact path="/users/add" component ={AddUser}/>
            <Route exact path="/users/edit/:id" component ={EditUser}/>
            <Route exact path="/users/:id" component ={View}/>
            <Route  component={NotFound}/> 
        </Switch>
    </Router>
  );
}

export default App;
