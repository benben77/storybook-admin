import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';
import styles from './App.module.less';

export default function App(props) {
  const navLinks = [
    { url: '/', name: 'Dashboard' },
    { url: '/storybooks', name: 'Story books' },
  ].map(x => {
    return (
      <NavLink key={x.url} exact className={styles.link} to={x.url} activeClassName={styles.linkActive}>{x.name}</NavLink>
    );
  });
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <div>Storybook Editor</div>
        <div className="g__flex--1"></div>
        <div>Miaosiyu</div>
      </div>
      <div className={styles.body}>
        <Router>
          <div className={styles.nav}>
            {navLinks}
          </div>
          <div className={styles.child}>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route path="/storybooks">
                <Test />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <div className={styles.footer}>Created by: benben77</div>
    </div>
  )
}
