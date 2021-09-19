import React from 'react'
import Button from 'react-bootstrap/Button'
import './Footer.css';

function Footer() {





    return (
        <div className='footer-home'>
            <div className='footer-buttons-container'>
                <button className="footer-button">
                    <i class="fab fa-github fa-sm"> GitHub</i>
                </button>
                <button className="footer-button">
                    <i class="fas fa-file-contract fa-sm"> Terms</i>
                </button>
                <button className="footer-button">
                    <i class="fas fa-lock fa-sm"> Privacy</i>
                </button>
                <button className="footer-button">
                    <i class="fas fa-coffee fa-sm"> Coffee</i>
                </button>
            </div>
        </div>
    )
}

export default Footer
