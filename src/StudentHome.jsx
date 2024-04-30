import React, { useState } from "react";

function StudentHomePage() {
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const [showComplaintPopup, setShowComplaintPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [complaintSubject, setComplaintSubject] = useState("");
  const [complaint, setComplaint] = useState("");

  const handleRequestForm = () => {
    // Logic for requesting a degree issuance form
    alert("Degree issuance form requested!");
  };

  const handleNotificationToggle = () => {
    setShowNotificationPopup(!showNotificationPopup);
    // Close complaint popup if it's open
    if (showComplaintPopup) {
      setShowComplaintPopup(false);
    }
  };

  const handleComplaintToggle = () => {
    setShowComplaintPopup(!showComplaintPopup);
    // Close notification popup if it's open
    if (showNotificationPopup) {
      setShowNotificationPopup(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleComplaintSubjectChange = (e) => {
    setComplaintSubject(e.target.value);
  };

  const handleComplaintChange = (e) => {
    setComplaint(e.target.value);
  };

  const handleNotificationSubmit = () => {
    // Logic for sending notification via email
    alert("Notification will be sent to: " + email);
    setShowNotificationPopup(false);
  };

  const handleComplaintSubmit = () => {
    // Logic for submitting complaint
    const fullComplaint = `Subject: ${complaintSubject}\n\n${complaint}`;
    alert("Complaint submitted:\n\n" + fullComplaint);
    setShowComplaintPopup(false);
  };

  return (
    <div>
      <h2>Welcome to Student Home Page</h2>
      <button onClick={handleRequestForm}>Request Degree Issuance Form</button>
      <button onClick={handleNotificationToggle}>Turn On Notifications</button>
      <button onClick={handleComplaintToggle}>Submit Complaint</button>
      {showNotificationPopup && (
        <div className="notification-popup">
          <h3>Enter your email to receive notifications:</h3>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
          <button onClick={handleNotificationSubmit}>Submit</button>
        </div>
      )}
      {showComplaintPopup && (
        <div className="complaint-popup">
          <h3>Enter your complaint details:</h3>
          <div>
            <label htmlFor="complaintSubject">Subject:</label>
            <input
              type="text"
              id="complaintSubject"
              placeholder="Enter complaint subject"
              value={complaintSubject}
              onChange={handleComplaintSubjectChange}
            />
          </div>
          <div>
            <label htmlFor="complaint">Complaint:</label>
            <textarea
              id="complaint"
              placeholder="Enter your complaint"
              value={complaint}
              onChange={handleComplaintChange}
            />
          </div>
          <button onClick={handleComplaintSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

export default StudentHomePage;
