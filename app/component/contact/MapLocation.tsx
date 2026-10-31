import React from "react";
import { mapContent } from "@/app/utills/Enquiry";

function MapLocation() {
  return (
    <div>
      <iframe
        title={mapContent.title}
        src={mapContent.embedUrl}
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}

export default MapLocation;
