/* @refresh reload */
import {render} from 'solid-js/web';

import './index.css';
import {Route, Router} from "@solidjs/router";
import Home from "./pages/Home";
import TailwindPlayground from "./pages/TailwindPlayground";
import NotFound from "./pages/NotFound";
import Github from "./pages/Github";
import DiscordInspiredAnimatedNavbar from "./pages/tutorial/DiscordInspiredAnimatedNavbar";
import TailwindTricks from "./pages/tutorial/TailwindTricks";
import TailwindClasses10 from "./pages/tutorial/TailwindClasses10";

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(() =>
  <Router>
    <Route path="/" component={Home}/>
    <Route path="/tailwind-playground" component={TailwindPlayground}/>
    <Route path="/github" component={Github}/>

    <Route path="/tutorial/1" component={DiscordInspiredAnimatedNavbar}/>
    <Route path="/tutorial/2" component={TailwindTricks}/>
    <Route path="/tutorial/3" component={TailwindClasses10}/>
    <Route path="*404" component={NotFound}/>
  </Router>
  , root!);
