import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './componets/Header';
import Footer from './componets/Footer';
import HomeScreen from './screens/HomeScreens';
const App = () => {
  return (
    <>
      <Header />

      <main className='py-3'>
        <Container>
          <h1>Welcome to Proshop</h1>
          <HomeScreen />
        </Container>
      </main>



      <Footer />
    </>
  );
}

export default App;
