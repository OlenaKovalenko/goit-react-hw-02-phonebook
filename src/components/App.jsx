import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
  state = { 
    contacts: [],
    // filter: ''
  } 

  addContact = newContact => {
    const contact = {
      ...newContact,
      id: nanoid(),
    };

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, contact]
      }
    })

  }
  render() { 
    return (
      <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={this.addContact}/>

      <h2>Contacts</h2>
      {/* <Filter /> */}
      <ContactList items={this.state.contacts} />
      
      <GlobalStyle />
    </div>
    );
  }
}
 


