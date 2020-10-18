import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import asyncComponent from "../../../util/asyncComponent";
import DroneDetail from './DroneDetail/DroneDetail';

const DMS = ({ match }) => (
  <div className="app-wrapper">
    <Switch>
      <Route path={`${match.url}/drone`} component={asyncComponent(() => import("./drone/Drone"))}/>
      <Route path={`${match.url}/maintenance`} component={asyncComponent(() => import("./Maintenance/Maintenance"))}/>
      <Route path={`${match.url}/dronedetail`} render={(props) => <DroneDetail {...props}/>}/>
      <Route path={`${match.url}/healthpost`} component={asyncComponent(() => import("./Healthposts/Healthposts"))}/>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/drone`}/>
    </Switch>
  </div>
);

export default DMS;
