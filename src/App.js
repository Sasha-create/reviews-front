// import React, { Suspense, lazy, useEffect } from "react";
// import { Switch } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import PublicRoute from "./components/PublicRoute";
// import routes from "./routes";
// import { authOperations } from "./redux/auth";

// // Расскоментировать. Исправить путь импорта, если нужно. Вставить компонент в раут

// const ReviewPage = lazy(() =>
//   import("./pages/ReviewPage" /* webpackChunkName: "review-page" */)
// );

// // const CurrentPage = lazy(() =>
// //   import("./pages/CurrentPage" /* webpackChunkName: "current-page" */)
// // );

// function App() {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(authOperations.getCurrentUser());
//   }, [dispatch]);

//   return (
//     <div className="App">
//       <Suspense>
//         <Switch>
//           <PublicRoute
//             path={routes.review}
//             restricted
//             redirectTo={routes.current}
//           >
//             <ReviewPage />
//           </PublicRoute>
//         </Switch>
//       </Suspense>
//     </div>
//   );
// }

// export default App;
import React, { Component } from "react";
import ContactForm from "./components/ContactForm";
import Container from "./components/Container";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleAddContact = (newContact) =>
    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));

  handleCheckUnique = (name) => {
    const { contacts } = this.state;
    const isExistContact = !!contacts.find((contact) => contact.name === name);
    isExistContact && alert("Contact is already exist");
    return !isExistContact;
  };

  handleRemoveContact = (id) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter((contact) => contact.id !== id),
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts)
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  }

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  render() {
    return (
      <Container>
        <ContactForm
          onAdd={this.handleAddContact}
          onCheckUnique={this.handleCheckUnique}
        />
        <Footer />
      </Container>
    );
  }
}

export default App;
