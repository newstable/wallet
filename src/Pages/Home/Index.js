import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Activity from "./Activity";
import Assets from "./Asset";
import Buy from "./Buy";
import Send from "./Send";
import Swap from "./Swap";
import Connect_wallet from "./Connect_wallet";
import Create_account from "./Create_account";
import Import_account from "./Import_account";
import Import_token from "./Import_token";
import Lock from "./Lock";

function Index() {
  return (
    <Switch>
      <Route path="/home/activity" component={Activity}></Route>
      <Route path="/home/assets" component={Assets}></Route>
      <Route path="/home/buy" component={Buy}></Route>
      <Route path="/home/send" component={Send}></Route>
      <Route path="/home/swap" component={Swap}></Route>
      <Route path="/home/connect-wallet" component={Connect_wallet}></Route>
      <Route path="/home/create-account" component={Create_account}></Route>
      <Route path="/home/import-account" component={Import_account}></Route>
      <Route path="/home/import-token" component={Import_token}></Route>
      <Route path="/home/lock" component={Lock}></Route>
      <Route path="/" component={Home}></Route>
    </Switch>
  );
}

export default Index;
