import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Layout from './components/Layout/Layout';
import Home from './Views/Home';
import ReviewOrder from './Views/ReviewOrder';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/review-order" component={ReviewOrder} />
          <Route path="*">Not Found</Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
