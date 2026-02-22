import React from 'react';
import { Headset } from 'lucide-react';
import './EnquiryButton.css';

const EnquiryButton = () => {
    return (
        <a href="/contactus" className="enquiry-floating-btn" title="Enquiry">
            <div className="icon-container">
                <Headset size={32} color="white" />
            </div>
        </a>
    );
};

export default EnquiryButton;
