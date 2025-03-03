import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';

import Home from './pages/Home';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';
import PostDetail from './pages/PostDetail';

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: 'translateY(50px)', position: 'absolute', width: '100%' },
    enter: { opacity: 1, transform: 'translateY(0)', position: 'relative', width: '100%' },
    leave: { opacity: 0, transform: 'translateY(50px)', position: 'absolute', width: '100%' },
  })

  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id/:author" component={PostDetail} />
        <Route component={NotFound} />
    </Switch>
    </animated.div>
  ));

}