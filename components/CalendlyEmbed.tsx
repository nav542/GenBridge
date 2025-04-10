import React from 'react';

const CalendlyEmbed = () => {
  return (
    <div className="w-full h-[700px]">
      <iframe
        src="https://calendly.com/your-username/30min"
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        title="Schedule a Session"
      ></iframe>
    </div>
  );
};

export default CalendlyEmbed;
