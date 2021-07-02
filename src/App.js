import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Layout from './components/Layout/Layout';
import Home from './Views/Home';
import ReviewOrder from './Views/ReviewOrder';
import SubmitOrder from './Views/SubmitOrder';
import ProductDetails from './Views/ProductDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/submit-order" component={SubmitOrder} />
          <Route exact path="/submit-order" component={SubmitOrder} />
          <Route path="*">Not Found</Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
