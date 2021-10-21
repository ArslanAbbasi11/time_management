
import './App.css';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import ProtectedRoute from './pages/ProtectedRoute';
import Home from './pages/Home';
import Settings from './pages/setting/Settings';
import { Switch,Route } from 'react-router';
function App() {
  return (

  
         <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact={true} path="/" component={Home} />
            <ProtectedRoute exact={true} path="/settings" component={Settings} />
            <Route path="/signup" component={SignUp} />
        </Switch>

  );
}

export default App;
