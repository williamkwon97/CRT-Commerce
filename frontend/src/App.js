
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter as Router, Route } from "react-router-dom";

/*import HomeScreen from './screens/HomeScreen' */

function App() {
  return (
    <Router>
    <div>
    <Header/>
    <main className='py-3'>
      <Container>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/login" exact component={LoginScreen} />
        <Route path='/product/:id' component={ProductScreen} />
        <Route path='/cart/:id?' component={CartScreen} />
      </Container>
    </main>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
