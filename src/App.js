import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Test from './pages/Test';
import styles from './App.module.css';

export default function App(props) {
  const navLinks = [
    { url: '/', name: 'Dashboard' },
    { url: '/storybooks', name: 'Story books' },
  ].map(x => {
    return (
      <div>
        <NavLink key={x.url} className={styles.link} to={x.url} activeClassName={styles.linkActive}>{x.name}</NavLink>
      </div>
    );
  });
  return (
    <div className={styles.app}>
      <div className={styles.header}>Header</div>
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
