import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './componets/Header';
import Footer from './componets/Footer';
import HomeScreen from './screens/HomeScreens';
import ProductScreen from './screens/ProductScreen';
const App = () => {
  return (

    <Router>
      <Header />

      <main className='py-3'>
        <Container>
          <h1>Welcome to Proshop</h1>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/product/:id' component={ProductScreen} />
        </Container>
      </main>



      <Footer />
    </Router>
  );
}

export default App;
