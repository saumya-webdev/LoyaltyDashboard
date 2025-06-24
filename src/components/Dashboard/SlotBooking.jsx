import React, { useState } from "react";
import "./SlotBooking.css";

const SlotBooking = ({ entitlement, onClose, onGenerateQRCodes }) => {
  const [ticketCount, setTicketCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ticketCount > entitlement.usageCount) {
      alert("You cannot book more than your available usage count.");
      return;
    }


    const codes = Array.from({ length: ticketCount }, (_, i) => ({
      id: `${Date.now()}-${i}`,
      data: `${entitlement.name}-${Date.now()}-${i + 1}`,
    }));

    alert(`Slot booked successfully for ${ticketCount} ticket(s)!`);
    onGenerateQRCodes(codes); 
    onClose(); 
  };

  return (
    <div className="slot-booking-overlay">
      <div className="slot-booking-modal">
        <h2>Book Slot for: {entitlement.name}</h2>
        <p><strong>Available Usage Count:</strong> {entitlement.usageCount}</p>
        {entitlement.usageCount > 0 ? (
          <form onSubmit={handleSubmit}>
            <label>
              Select Date:
              <input type="date" required />
            </label>
            <label>
              Select Time Slot:
              <select required>
                <option value="">--Select--</option>
                <option>10:00 AM - 11:00 AM</option>
                <option>12:00 PM - 01:00 PM</option>
                <option>02:00 PM - 03:00 PM</option>
                <option>04:00 PM - 05:00 PM</option>
              </select>
            </label>
            <label>
              Number of Tickets:
              <select value={ticketCount}
                      onChange={(e) => setTicketCount(parseInt(e.target.value, 10))}
                      required>
                {Array.from({ length: entitlement.usageCount }, (_, i) => (
                  <option key={i+1} value={i+1}>{i+1}</option>
                ))}
              </select>
            </label>
            <button type="submit">Confirm Booking</button>
            <button type="button" onClick={onClose} className="close-btn">
              Cancel
            </button>
          </form>
        ) : (
          <>
            <p style={{ color: "red" }}>You have used all available slots.</p>
            <button type="button" onClick={onClose} className="close-btn">
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default SlotBooking;
