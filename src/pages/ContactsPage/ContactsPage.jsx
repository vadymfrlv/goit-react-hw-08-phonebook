import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getExistContacts } from 'redux/contacts/contacts-operations';
import Section from '../../components/Section';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Notification from '../../components/Notification';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getExistContacts());
  }, [dispatch]);

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        {contacts.length > 0 ? (
          <>
            <div className={styles.description}>All contacts: {contacts.length}</div>
            <Filter />
            <ContactList />
          </>
        ) : (
          <Notification message="There are no contacts yet. Let's create a new one!" />
        )}
      </Section>
    </div>
  );
};

export default ContactsPage;
