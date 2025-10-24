import React , {useState} from "react";
import type { Contact } from "./Contact";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const initialData : Contact[] = [
        { id: 1, name: "John Doe", email: "john@gmail.com", phone: "123-456-7890" },
        { id: 2, name: "Jane Smith", email: "jane@gmail.com", phone: "987-654-3210" },
         { id: 3, name: "Robert", email: "robert@gmail.com", phone: "987-654-3210" },
         { id: 4, name: "Jake", email: "jake@gmail.com", phone: "987-654-3210" },
    ]
const ManageContacts = () => {
 
    const [contacts , setContacts] = useState<Contact[]>(initialData);

    const [editingContact, setEditingContact] = useState<Contact | null>(null);

    const handleSaveContact = (contact: Contact) => {
        if(contact.id){
            setContacts(prevContacts => prevContacts.map(c => c.id === contact.id ? contact : c));
            setEditingContact(null);
        }
        else
        {
            const newContact = { ...contact, id: Date.now() };
            setContacts(prev => [...prev, newContact]);
        }
    }
    const handleEditContact = (contact: Contact) => {
        setEditingContact(contact);
    }
    const handleDeleteContact = (id: number) => {
        
    }

    return(
        <>
           <div className="container mt-5">
              <h2 className="display-4 mt-3">Contacts</h2>

              <div className="card p-3 mb-3 mt-5 col-8">
                    <h3>{editingContact ? 'Update Contact' : 'Add New Contact'}</h3>
                    <ContactForm
                        initialData={editingContact}
                        onSave={handleSaveContact}
                        onCancel={() => setEditingContact(null)} />
              </div>
              <hr />
              <div>
                <h3 className="mt-5">Contact List</h3>
                <ContactList
                    contacts={contacts}
                    onEdit={handleEditContact}
                    onDelete={handleDeleteContact} />
              </div>
            </div> 
        </>
    )
    
}


export default ManageContacts;