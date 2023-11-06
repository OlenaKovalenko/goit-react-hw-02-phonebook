import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { GlobalStyle } from './GlobalStyle';
import { nanoid } from 'nanoid';


export class App extends Component {
  state = { 
    contacts: [],
    // filter: ''
  } 

  // addContact = newContact => {
  //   const contact = {
  //     ...newContact,
  //     id: nanoid(),
  //   };

  //   this.setState(prevState => {
  //     return {
  //       contacts: [...prevState.contacts, contact]
  //     }
  //   })

  }
  render() { 
    return (
      <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={this.addContact}/>

      <h2>Contacts</h2>
      {/* <Filter />
      <ContactList /> */}
      
      <GlobalStyle />
    </div>
    );
  }
}
 


