import React, { useState } from "react";
import "./StudentHomePage.css"; // Import CSS file for styling
import NavigationBar from "./NavigationBar";

function StudentHomePage() {
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const [showComplaintPopup, setShowComplaintPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [complaintSubject, setComplaintSubject] = useState("");
  const [complaint, setComplaint] = useState("");
  const [showScholarshipOptions, setShowScholarshipOptions] = useState(false);
  const [showExchangeProgramOptions, setShowExchangeProgramOptions] = useState(false);

  const handleRequestForm = () => {
    // Logic for requesting a degree issuance form
    alert("Degree issuance form requested!");
  };

  const handleNotificationToggle = () => {
    setShowNotificationPopup((prevState) => !prevState);
    // Close complaint popup if it's open
    if (showComplaintPopup) {
      setShowComplaintPopup(false);
    }
  };

  const handleComplaintToggle = () => {
    setShowComplaintPopup((prevState) => !prevState);
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

  const handleAppointmentBooking = () => {
    // Logic for booking an appointment
    alert("Appointment booked!");
  };

  const handleTokenGeneration = () => {
    // Logic for generating a token
    const tokenNumber = Math.floor(Math.random() * 1000) + 1; // Random token number
    alert("Token number assigned: " + tokenNumber);
  };

  const handleDownloadAdmitCard = () => {
    // Logic for downloading admit card
    alert("Admit card downloaded!");
  };

  const handleViewAdmitCard = () => {
    // Logic for viewing admit card
    alert("Viewing admit card!");
  };

  const handleToggleScholarshipOptions = () => {
    setShowScholarshipOptions((prevState) => !prevState);
  };

  const handleToggleExchangeProgramOptions = () => {
    setShowExchangeProgramOptions((prevState) => !prevState);
  };

  const handleExchangeProgramsOption = (option) => {
    // Logic for handling exchange program options
    alert(option);
  };

  return (
    <div className="student-home-container">
      <h2>Welcome to Student Home Page</h2>
      <button onClick={handleRequestForm}>Request Degree Issuance Form</button>
      <button onClick={handleNotificationToggle}>Turn On Notifications</button>
      <button onClick={handleComplaintToggle}>Submit Complaint</button>
      <button onClick={handleAppointmentBooking}>Book Appointment</button>
      <button onClick={handleTokenGeneration}>Get Token</button>
      <button onClick={handleDownloadAdmitCard}>Download Admit Card</button>
      <button onClick={handleViewAdmitCard}>View Admit Card</button>
      <div className="scholarship-container">
        <button className="scholarship-button" onClick={handleToggleScholarshipOptions}>
          Scholarships
        </button>
        {showScholarshipOptions && (
          <div className="scholarship-options">
            <button>Application Procedure</button>
            <button>Financial Aid</button>
          </div>
        )}
      </div>
      <div className="exchange-program-container">
        <button className="exchange-program-button" onClick={handleToggleExchangeProgramOptions}>
          Exchange Programs
        </button>
        {showExchangeProgramOptions && (
          <div className="exchange-program-options">
            <button onClick={() => handleExchangeProgramsOption("Application Procedure")}>
              Application Procedure
            </button>
            <button onClick={() => handleExchangeProgramsOption("Available Programs")}>
              Available Programs
            </button>
          </div>
        )}
      </div>
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
