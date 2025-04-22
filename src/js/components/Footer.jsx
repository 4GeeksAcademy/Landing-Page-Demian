import React from 'react';

const Footer = (props) => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            {props.text}
        </footer>
    )
}

export default Footer

