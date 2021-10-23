import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import Container from "./components/Container";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <>
        <Container>
          <ContactForm />
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
