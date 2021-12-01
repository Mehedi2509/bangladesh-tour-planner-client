
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './pages/About/About';
import Branches from './pages/Branches/Branches';
import Home from './pages/Home/Home/Home';
import SignIn from './pages/loginProcess/SignIn/SignIn';
import SignUp from './pages/loginProcess/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';
import BuyTicket from './pages/TourDetail/BuyTicket/BuyTicket';
import TourDetail from './pages/TourDetail/TourDetail';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/tourDetail/:id'>
              <TourDetail></TourDetail>
            </PrivateRoute>
            <PrivateRoute path='/branches'>
              <Branches></Branches>
            </PrivateRoute>
            <PrivateRoute path='/buyTicket'>
              <BuyTicket></BuyTicket>
            </PrivateRoute>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='/signIn'>
              <SignIn></SignIn>
            </Route>
            <Route path='/signUp'>
              <SignUp></SignUp>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
