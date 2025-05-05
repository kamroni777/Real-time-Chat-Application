
import ContactItem from './ContactItem';

const ContactsList = ({ contacts, activeContact, setActiveContact }) => {
  return (
    <div className="overflow-y-auto h-full">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          isActive={activeContact?.id === contact.id}
          onClick={() => setActiveContact(contact)}
        />
      ))}
    </div>
  );
};

export default ContactsList;