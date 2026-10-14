import React from 'react'

function MapLocation() {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46697.93189070479!2d-79.17637704401535!3d37.36875520820936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b2cfdee9f0c7a1%3A0x1b583206b79b202e!2sLynchburg%20Arms%20and%20Indoor%20Shooting%20Range!5e1!3m2!1sen!2sin!4v1791972164512!5m2!1sen!2sin" 
                width="100%" height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default MapLocation

