import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "../pages/Home";
import ProductPage from "../pages/ProductPage";
import Navbar from "./NavBar";
import Cart from "./Cart";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <NavMenu />
        <Cart />
        <Switch>
          <Route path="/products/:handle">
            <ProductPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
