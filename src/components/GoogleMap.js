import React from "react";

const GoogleMap = () => {
    return (
        <div style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            filter: "invert(90%) hue-rotate(200deg) saturate(1.2)",
        }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920.663218888143!2d88.43388296663763!3d22.629434193077692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89fe3b109c623%3A0xdfbe090bb9572f78!2sB.%20P.%20Poddar%20Institute%20of%20Management%20and%20Technology!5e0!3m2!1sen!2sin!4v1734013566059!5m2!1sen!2sin"
                width="100%"
                height="360px"
                style={{ border: 0, borderRadius: "1rem" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="BPPIMT Location"
            ></iframe>
        </div>
    );
};

export default GoogleMap;
