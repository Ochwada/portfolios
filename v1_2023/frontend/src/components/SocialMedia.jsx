import React from 'react';
import { FaMedium, FaDev } from "react-icons/fa";

import { BsTwitter, BsLinkedin, BsFacebook, BsGithub } from 'react-icons/bs';

function SocialMedia() {
    return (
        <div className="app__social">
            <div>
                <a href="https://medium.com/@ochwada" target="_blank" rel="noreferrer">
                    <FaMedium />
                </a>
            </div>
            <div>
                <a href="https://dev.to/ochwada" target="_blank" rel="noreferrer">
                    <FaDev />
                </a>
            </div>
            <div>
                <a href="https://github.com/Ochwada" target="_blank" rel="noreferrer">
                    <BsGithub />
                </a>

            </div>
            <div>
                <a href="https://www.linkedin.com/in/ochwada-l-66630a36/" target="_blank" rel="noreferrer">
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href="https://www.facebook.com/ochwada.linda" target="_blank" rel="noreferrer">
                    <BsFacebook />
                </a>

            </div>
            <div>
                <a href="https://twitter.com/nakhulolinda" target="_blank" rel="noreferrer">
                    <BsTwitter />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia