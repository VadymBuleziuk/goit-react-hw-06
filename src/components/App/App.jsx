import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactList from "../ContactList/ContactLIst";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

export default function App() {
  const defaultUsers = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];
  const [contacts, setContacts] = useState(() => {
    const localStorageContacts = localStorage.getItem("SavedContacts");
    return localStorageContacts
      ? JSON.parse(localStorageContacts)
      : defaultUsers;
  });
  const [filteredContacts, setFilteredContacts] = useState(contacts);

  const submitContact = (value) => {
    const newContact = { ...value, id: nanoid() };
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
  };
  const filterContacts = (value) => {
    if (value === "") {
      setFilteredContacts(contacts);
    } else {
      setFilteredContacts(
        contacts.filter((user) =>
          user.name.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };
  const deleteUser = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    setFilteredContacts(updatedContacts);
  };
  useEffect(() => {
    localStorage.setItem("SavedContacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm submitFunction={submitContact} />
      <SearchBox filterContacts={filterContacts} />
      <ContactList allUsers={filteredContacts} deleteUser={deleteUser} />
    </div>
  );
}
