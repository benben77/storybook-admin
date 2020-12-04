import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import styles from './App.module.scss';

const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Assets = React.lazy(() => import('./pages/Assets'));
const StoryBooks = React.lazy(() => import('./pages/StoryBooks'));

export default function App(props) {
  const navLinks = [
    { url: '/', name: 'Dashboard' },
    { url: '/assets', name: 'Assets' },
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
            <Suspense fallback={null}>
              <Switch>
                <Route exact path="/">
                  <Dashboard />
                </Route>
                <Route path="/assets">
                  <Assets />
                </Route>
                <Route path="/storybooks">
                  <StoryBooks />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </Router>
      </div>
      <div className={styles.footer}>Created by: benben77</div>
    </div>
  )
}
