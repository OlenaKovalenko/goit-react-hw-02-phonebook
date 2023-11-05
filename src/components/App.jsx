import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';


export class App extends Component {
  state = { 
    contacts: [],
    filter: ''
  } 
  render() { 
    return (
      <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      {/* <Filter />
      <ContactList /> */}
      
      <GlobalStyle />
    </div>
    );
  }
}
 


