
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';

import ProductScreen from './screens/ProductScreen';
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
      </Container>
    </main>
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
