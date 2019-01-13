import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './component/App';
import Person from './component/Person';

ReactDOM.render(
  <Router>
      <div>
        <Route exact path='/' component={App} />
		    <Route path='/person' component={Person} />
      </div>
  </Router>,
  document.getElementById('root')
);


