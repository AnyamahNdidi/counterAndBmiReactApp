import logo from './logo.svg';
import './App.css';
import MainNav from './MainNav/MainNav';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Counter from './MainNav/Counter/Counter';
import Bmi from './MainNav/BMI/Bmi';

function App() {
  return (
   <Router>
     <Switch>
          <Route path="/" exact component={MainNav}></Route>
          <Route path="/Counter" exact component={Counter}></Route>
          <Route path="/Bmi" exact component={Bmi}></Route>
     </Switch>
   </Router>
  );
}

export default App;
