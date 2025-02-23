import {React,useState} from 'react'
import styles from './contact.module.css'
import { FaMobileAlt, FaEnvelope, FaAddressBook } from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "",phone:"", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit =  async(e) => {
        e.preventDefault();
        setStatus("Sending...");
        await emailjs.send(
            `${import.meta.env.VITE_EMAILJS_SERVICE_ID}`, 
            `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
            formData,
            `${import.meta.env.VITE_EMAILJS_PUBLIC_KEY}`
        ).then(() => {
            alert("Email sent successfully!");
            setStatus("")
            setFormData({ name: "", email: "",phone:"", message: ""});
        }).catch(() => {
            alert("Failed to send email. Try again.");
        });
    };

    return (
        <div className={`${styles.contact}`} id="contact">
            <h2 className='font-bold text-2xl'>Contact</h2>
            <div className={`${styles.contact_container}`}>
                <div className={`${styles.mails}`}>
                    <p className='flex items-center '>
                        <div className='mr-2'>
                            <FaMobileAlt />
                        </div>
                        +91 8344563311</p>
                    <p className='flex items-center'>
                        <div className='mr-2'>
                            <FaEnvelope />
                        </div>
                        ravishankar.23ucsc@sonacas.edu.in</p>
                    <p className='flex items-center'>
                        <div className='mr-2'>
                            <FaAddressBook />
                        </div>
                        Angammal Colony,Salem-9</p>
                </div>

                <form className={`${styles.formss}`} onSubmit={handleSubmit}  id="formss">
                    <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange} size="50"/>
                    <input name="email"type="text" placeholder="Email Address" value={formData.email} onChange={handleChange}/>
                    <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}/>
                    <textarea name="message" placeholder="Your Message" rows="5" cols="40"value={formData.message} onChange={handleChange} ></textarea>
                    <button type="submit" className={`${styles.btn}`}>{status?<CircularProgress size="20px" sx={{color:"white"}}/>:"Submit"}</button>
                    
                </form>
                
            </div>
        </div>
    )
}
export default Contact