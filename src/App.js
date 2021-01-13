import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';

function App() {

  const [isLogin, setIsLogin] = useState(false);
  // const [showLogin, setShowLogin] = useState(true);

  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/">{isLogin ? <Home />: <Redirect to='/login' />}</Route>
        <Route exact path="/login">{isLogin ? <Home /> : <Login/>}</Route>
        <Route exact path="/signup">{isLogin ? <Home /> : <Signup />}</Route>
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
