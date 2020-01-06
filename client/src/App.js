import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import RecipeState from "./contexts/recipe/RecipeState";
import AuthState from "./contexts/auth/AuthState";
import Dashboard from "./components/pages/Dashboard";
import RegisterForm from "./components/forms/RegisterForm";
import LoginForm from "./components/forms/LoginForm";
import AlertState from "./contexts/alert/AlertState";
import { Alerts } from "./components/utlity/Alerts";

// TODO - It will always be the public recipes of all users from the backend
// that are displayed on the Home page. In Home's useEffect() I can fetch those.
// On the Dashboard only the user's recipes will be displayed which will also be
// handled in the useEffect() Hook.

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <RecipeState>
          <BrowserRouter>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/login" component={LoginForm} />
                  <Route exact path="/register" component={RegisterForm} />
                  <Route exact path="/dashboard" component={Dashboard} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contact" component={Contact} />
                </Switch>
              </div>
            </Fragment>
          </BrowserRouter>
        </RecipeState>
      </AlertState>
    </AuthState>
  );
};

export default App;
