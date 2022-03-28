import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Welcome from "./Welcome";
import Alldone from "./All_done";
import Import_phrase from "./Import_phrase";
import Phrase_confirm from "./Phrase_confirm";
import Seed_phrase from "./Seed_phrase";
import Select_action from "./Select_action";
import Create_password from "./Create_password";

function Auth() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome}></Route>
        <Route exact path="/done" component={Alldone}></Route>
        <Route
          exact
          path="/create-password"
          component={Create_password}
        ></Route>
        <Route exact path="/import-phrase" component={Import_phrase}></Route>
        <Route exact path="/phrase-confirm" component={Phrase_confirm}></Route>
        <Route exact path="/seed-phrase" component={Seed_phrase}></Route>
        <Route exact path="/select-action" component={Select_action}></Route>
        <Route path="*" component={Import_phrase}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Auth;
