import React, { useState } from "react";
import "./Booking.css";

const BookingForm = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

     const form = event.target;
  const requiredFields = [
    "fullName",
    "email",
    "phoneNumber",
    "eventDestination",
    "eventDate",
    "numberOfGuests",
    "message"
  ];

  for (let field of requiredFields) {
    if (!form[field].value.trim()) {
      setResult("Please fill all required fields.");
      return; // prevent form submission
    }
  }


    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key",
         "110da56a-174f-4133-b776-8dd9a36e03e8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };




  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    eventType: "Wedding",
    eventDestination: "",
    eventDate: "",
    numberOfGuests: "",
    howDidYouKnow: "Social Media",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Later: Send data to backend
    console.log("Form Submitted", formData);
  };

  return (
    <>
     <div className="booking-headingg">
      <h2>Book Your Dream Event Today</h2>
      <p>Just a few clicks away from your unforgettable celebration.</p>
      </div>


    <div className="form-container">
      <h2>Book An Appointment 📩</h2>
      <p>Book an appointment for your event easily.</p>

      <form onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your Name"
              onChange={handleChange}
              required  
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              required  
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone No."
              onChange={handleChange}
              required  
            />
          </div>

          <div className="form-group">
            <label>Event Type</label>
            <select name="eventType" onChange={handleChange}>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Corporate</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Event Destination</label>
            <input
              type="text"
              name="eventDestination"
              placeholder="Venue / Hotel Name"
              onChange={handleChange}
              required  
            />
          </div>

          <div className="form-group">
            <label>Event Date</label>
            <input
              type="date"
              name="eventDate"
              onChange={handleChange}
              required  
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Number of Guests</label>
            <input
              type="number"
              name="numberOfGuests"
              placeholder="Approximate Number of Guests"
              onChange={handleChange}
              required  
            />
          </div>

          <div className="form-group">
            <label>How did you know about AmoraEvent </label>
            <select name="howDidYouKnow" onChange={handleChange}>
              <option>Social Media</option>
              <option>Google</option>
              <option>Friend</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="form-group full-width">
          <label>
            Is there anything else you would like to share or specific questions
            you have for us?
          </label>
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            onChange={handleChange}
            required  
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
      <span>{result}</span>
    </div>
    
</>
  );
};

export default BookingForm;
