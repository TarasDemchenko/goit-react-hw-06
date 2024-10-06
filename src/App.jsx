import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import SearchBox from "./components/searchBox/SearchBox";

const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
