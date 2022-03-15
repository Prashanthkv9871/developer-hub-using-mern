import React from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Myprofile from './components/Myprofile/Myprofile';
import Indprofile from './components/Indprofile/Indprofile';

const App = () => {
  return <div>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/myprofile' exact component={Myprofile} />
        <Route path='/indprofile/:fullname/:email/:skil/:id/:mobile' exact component={Indprofile} />

      </Switch>
    </BrowserRouter>
  </div>;
};

export default App;
