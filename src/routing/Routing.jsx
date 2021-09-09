import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Aboute, Main, Settings, NotFound, DataList } from '../pages';
import { paths } from '../constants';
import { Navbar } from '../components';

export const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={paths.main} exact>
          <Main />
        </Route>
        <Route path={paths.about} exact>
          <Aboute />
        </Route>
        <Route path={paths.settings} exact>
          <Settings />
        </Route>
        <Route path={paths.dataList} exact>
          <DataList />
        </Route>

        <NotFound />
      </Switch>
    </Router>
  );
};
