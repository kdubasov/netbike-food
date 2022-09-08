import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className={`Footer`}>
            <div className="container">
                <a 
                    target={`_blank`}
                    href="https://netbike.ru/"
                >
                    <img src="/images/logo-create.svg" alt=""/>
                </a>
            </div>
        </div>
    );
};

export default Footer;