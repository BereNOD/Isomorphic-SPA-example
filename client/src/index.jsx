import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Entry, { BROWSER } from './Entry';
import './styles.css';
import './styles.scss';


const root = document.getElementById('root');

hydrate(
  <Router>
    <Entry renderer={BROWSER} />
  </Router>,
  root
);
