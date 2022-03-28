import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import Auth from './Index';
import Welcome from "../Pages/Auth/Welcome";
import Alldone from "../Pages/Auth/All_done";
import Import_phrase from "../Pages/Auth/Import_phrase";
import Phrase_confirm from "../Pages/Auth/Phrase_confirm";
import Seed_phrase from "../Pages/Auth/Seed_phrase";
import Select_action from "../Pages/Auth/Select_action";
import Create_password from "../Pages/Auth/Create_password";
import Home from "../Pages/Home/Index";
import Buy from "../Pages/Home/Buy";
import Send from "../Pages/Home/Send";
import Swap from "../Pages/Home/Swap";
import Connect_wallet from "../Pages/Home/Connect_wallet";
import Create_account from "../Pages/Home/Create_account";
import Import_account from "../Pages/Home/Import_account";
import Import_token from "../Pages/Home/Import_token";
import Account_detail from "../Pages/Home/Account-detail";
import Lock from "../Pages/Home/Lock";

import Setting from "../Pages/Setting/Index";
import General from "../Pages/Setting/General";
import Land from "../Pages/Setting/land";
import Advanced from "../Pages/Setting/Advanced";
import Networks from "../Pages/Setting/Networks";
import Experimental from "../Pages/Setting/Experimental";
import Security from "../Pages/Setting/Security";
import Contacts from "../Pages/Setting/Contacts";
import Alerts from "../Pages/Setting/Alerts";
import About from "../Pages/Setting/About";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome}></Route>
        <Route exact path="/auth" component={Welcome}></Route>
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
        <Route exact path="/setting" component={Setting}></Route>

        <Route exact path="/home" component={Home}></Route>
        <Route path="/home/buy" component={Buy}></Route>
        <Route path="/home/send" component={Send}></Route>
        <Route path="/home/swap" component={Swap}></Route>
        <Route path="/home/connect-wallet" component={Connect_wallet}></Route>
        <Route path="/home/create-account" component={Create_account}></Route>
        <Route path="/home/import-account" component={Import_account}></Route>
        <Route path="/home/import-token" component={Import_token}></Route>
        <Route path="/home/account-detail" component={Account_detail}></Route>
        <Route path="/home/lock" component={Lock}></Route>

        <Route path="/setting/general" component={General}></Route>
        <Route path="/setting/land" component={Land}></Route>
        <Route path="/setting/advanced" component={Advanced}></Route>
        <Route path="/setting/experimental" component={Experimental}></Route>
        <Route path="/setting/security" component={Security}></Route>
        <Route path="/setting/networks" component={Networks}></Route>
        <Route path="/setting/contacts" component={Contacts}></Route>
        <Route path="/setting/alerts" component={Alerts}></Route>
        <Route path="/setting/about" component={About}></Route>
        <Route path="*" component={Welcome}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
