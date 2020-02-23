import React from 'react';

const Footer = () => {
    let year = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {`${year}`} Stackline</p>
        </footer>
    )
}

export default Footer;