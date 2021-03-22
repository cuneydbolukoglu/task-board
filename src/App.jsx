import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/header';
import Login from './pages/Login';
import Register from './pages/Register';
import Errorpage from './pages/404';
import Private from './pages/Private';
import changePassword from "./pages/ChangePassword";

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/" component={Private} />
          <Route exact path="/changepassword" component={changePassword} />
          <Route component={Errorpage} />
        </Switch>
      </Router>
  )
}

export default App;