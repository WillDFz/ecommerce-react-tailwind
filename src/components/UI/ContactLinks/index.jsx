import React from "react";

const ContactLinks = () => {
    return (
        <div>
            <h1 className="text-secondary font-bold mb-3">Entre em contato</h1>
            <ul>
                <li className="mb-3">
                    <img src="svg/phone.svg" className="h-5 inline mr-3" alt="" />
                    <a href="tel:" className="text-primary text-sm opacity-70">
                        (00) 00000-0000
                    </a>
                </li>
                <li className="mb-3">
                    <img src="svg/mail.svg" className="h-5 inline mr-3" alt="" />
                    <a
                        href="mailto:"
                        className="text-primary text-sm opacity-70"
                    >
                        email@email.com
                    </a>
                </li>
                <li className="mb-3">
                    <img src="svg/map-mark.svg" className="w-5 h-5 inline mr-3" alt="" />
                    <a href="" className="text-primary text-sm opacity-70">
                        Rua X, 0000
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default ContactLinks;
