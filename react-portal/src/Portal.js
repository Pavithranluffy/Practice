import React, { useState } from "react";
import ReactDOM from "react-dom";

// Main component that toggles the popup
export default function Portal() {
  // State to manage whether the popup is open
  const [isOpened, setIsOpened] = useState(false);

  // Function to open the popup
  function openPopup() {
    setIsOpened(true);
  }

  // Function to close the popup
  function closePopup() {
    setIsOpened(false);
  }

  return (
    <div>
      {/* Button to open the popup */}
      <button onClick={openPopup}>Open Popup</button>

      {/* Conditionally render the Popup component */}
      {isOpened && <PopupComp onClose={closePopup} />}
    </div>
  );
}

// Popup Component that renders using a React Portal
export function PopupComp({ onClose }) {
  // Inline styles for the popup
  const POPUP_STYLE = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 1000, // Ensures popup is on top of other elements
  };

  // Overlay style to dim the background
  const OVERLAY_STYLE = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black
    zIndex: 999, // Below the popup but above everything else
  };

  // ReactDOM.createPortal renders the popup outside the main DOM hierarchy
  return ReactDOM.createPortal(
    <>
      {/* Overlay to handle background dimming */}
      <div style={OVERLAY_STYLE} onClick={onClose}></div>

      {/* Popup content */}
      <div style={POPUP_STYLE}>
        <h2>This is the Popup Component</h2>
        <p>Click outside or press the button to close this popup.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </>,
    // Specify the target DOM node to render the popup
    document.body
  );
}
