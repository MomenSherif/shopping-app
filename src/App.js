import { Container } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import Home from './Views/Home';

function App() {
  return (
    <div className="App">
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*">Not Found</Route>
        </Switch>
      </Container>
    </div>
  );
}

export default App;
