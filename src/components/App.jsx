import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { AppContainer } from './App.styled';


export class App extends Component {
  state = { 
    contacts: [],
    filter: ''
  } 

  addContact = newContact => {
    const { contacts } = this.state;

    const contact = {
      ...newContact,
      id: nanoid(),
    };

    const isExist = contacts.some(item => item.name.toLowerCase() === newContact.name.toLowerCase());

    if (isExist) {
      alert(`${newContact.name} is alredy in contacts.`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      }
    })
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  }

  deleteContact = (contactId) => {
    this.setState(prevState => {
      return { contacts: prevState.contacts.filter(item => item.id !== contactId)}
    })
  }

  render() { 
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();

    const visibleContacts = contacts.filter(item => item.name.toLowerCase().includes(normalizedFilter));

    return (
      <AppContainer>
      <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        
        {contacts.length > 0 ? (
          <>
            <h2>Contacts</h2>
            <Filter value={filter} onFind={this.changeFilter}/>
            <ContactList items={visibleContacts} onDelete={this.deleteContact}/>
          </>
      ) : null}

      <GlobalStyle />
    </AppContainer>
    );
  }
}
 


