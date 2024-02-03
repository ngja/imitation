/* @refresh reload */
import {render} from 'solid-js/web';

import './index.css';
import {Route, Router} from "@solidjs/router";
import Home from "./pages/Home";
import TailwindPlayground from "./pages/TailwindPlayground";
import NotFound from "./pages/NotFound";

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
    <Route path="*404" component={NotFound}/>
  </Router>
  , root!);
