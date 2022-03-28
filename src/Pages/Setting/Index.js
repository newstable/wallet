import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import General from "./General";
import About from "./About";
import Advanced from "./Advanced";
import Alerts from "./Alerts";
import Contacts from "./Contacts";
import Experimental from "./Experimental";
import Networks from "./Networks";
import Security from "./Security";

function Index() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={General}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/advanced" component={Advanced}></Route>
        <Route exact path="/alerts" component={Alerts}></Route>
        <Route exact path="/contacts" component={Contacts}></Route>
        <Route exact path="/experimental" component={Experimental}></Route>
        <Route exact path="/networks" component={Networks}></Route>
        <Route exact path="/security" component={Security}></Route>
        <Route path="*" component={General}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Index;
