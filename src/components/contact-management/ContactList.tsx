import React from "react";
import type { Contact } from "./Contact";

interface ContactListProps {
    contacts: Contact[];
    onEdit: (contact: Contact) => void;
    onDelete: (id: number) => void;
}

const ContactList =( {contacts , onEdit, onDelete} : ContactListProps) => {
    return(
        <>
            <table className="table table-striped table-hover table-bordered mt-2">
                <thead className="thead-dark">
                    <tr className="table-light">
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col" className="text-center">Actions</th> 
                    </tr>
                    </thead>
                    <tbody>
                        {
                            contacts.map(contact => (
                                <tr key={contact.id}>
                                      <td>{contact.name}</td>
                                      <td>{contact.email}</td>
                                      <td>{contact.phone}</td>   
                                      <td className="text-center">
                                        <button onClick={ () => onEdit(contact)} 
                                        className="btn btn-success btn-sm me-2">
                                            Edit
                                        </button>
                                          <button onClick={ () => onDelete(contact.id)} 
                                        className="btn btn-danger btn-sm me-2">
                                            Delete
                                        </button>
                                        </td>   
                                </tr>
                            ))
                        }
                    </tbody>
            </table>
        </>
    )
 }

 export default ContactList;
