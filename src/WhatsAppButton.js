import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ phoneNumber, message }) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <div className='cont-whatsapp'>
            <a href={url} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
            </a>
        </div>      
    );
};

export default WhatsAppButton;
