import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './componets/Header';
import Footer from './componets/Footer';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <Container>
          <h1>Welcome to Proshop</h1>
        </Container>
      </main>



      <Footer />
    </>
  );
}

export default App;
