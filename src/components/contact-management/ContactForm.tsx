import React, {useState, useEffect} from "react";
import type { Contact } from "./Contact";

interface ContactFormProps {
   initialData: Contact | null; 
   onSave: (contact: Contact) => void;
   onCancel: () => void;
}


const emptyContact: Omit<Contact, "id" > = { name: '', email: '', phone: ''}

const ContactForm = ({ initialData, onSave, onCancel} : ContactFormProps) => {
   const [formData , setFormData] = useState<Omit<Contact, 'id'> & {id?: number}>(initialData || { ...emptyContact }); 

   useEffect(() => {
         if(initialData)
         {
            setFormData(initialData);
         }
         else{
            setFormData({ ...emptyContact });
         }
    } , [initialData])

  const handleChange = (event) => {
        const { name , value} = event.target;  
        setFormData(prevData => ({...prevData, [name]: value}));  
  }
    const handleSubmit =(event) => {
       event.preventDefault();
       onSave(formData as Contact);
       setFormData(emptyContact);
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group ">
                     <input type="text" className="form-control mt-3" name="name" onChange={handleChange} value={formData.name} placeholder="Enter Name" />
                </div>
                 <div className="form-group ">
                     <input type="text" className="form-control mt-3" name="email" onChange={handleChange} value={formData.email} placeholder="Enter Email" />
                </div>
                 <div className="form-group ">
                     <input type="text" className="form-control mt-3" name="phone" onChange={handleChange} value={formData.phone} placeholder="Enter Phone" />
                </div>

                <div className="btn-group d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary m-2">{initialData ? "Update Contact" : "Add Contact"}</button> 
                    { initialData && (
                        <button className="btn btn-danger m-2" onClick={onCancel}>Cancel Save</button>
                    )}
                </div>
            </form>
        </>
    )
}



export default ContactForm;