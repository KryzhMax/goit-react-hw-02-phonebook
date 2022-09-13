import React, { Component } from 'react';
// import s from './App.module.css';
import Section from './section/Section';
import { ContactForm } from './form/ContactForm ';
import { Filter } from './list/List';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };

  onDelete = id => {
    // console.log(id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== id),
    }));
  };

  onFilter = value => {
    // console.log(value);
    this.setState({ filter: value });
  };

  filteredContacts = () => {
    // console.log(this.state.contacts);
    const unfilteredContacts = this.state.contacts;
    return unfilteredContacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm callback={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter
            onHandleFilter={this.onFilter}
            contacts={this.filteredContacts()}
            onDeleteHandler={this.onDelete}
          />
        </Section>
      </div>
    );
  }
}
