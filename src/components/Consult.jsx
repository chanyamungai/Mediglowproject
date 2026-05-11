import React, { useState } from "react";
import "../css/Consult.css";

const ConsultPage = () => {
  const [step, setStep] = useState(1);

  // Form state
  const [form, setForm] = useState({
    name: "",
    age: "",
    category: "skin",
    symptoms: "",
    duration: "",
  });

  // Chat state
  const [messages, setMessages] = useState([
    {
      sender: "doctor",
      text: "Hello 👋 Please describe how you're feeling today.",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Send message
  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    // Add user message
    setMessages([
      ...messages,
      { sender: "user", text: newMessage },

      // fake doctor reply
      {
        sender: "doctor",
        text: "Thank you for your message. A doctor will assist you shortly.",
      },
    ]);

    setNewMessage("");
  };

  return (
    <div className="consult-container">
      <h2 className="title">Online Consultation</h2>

      {/* STEP 1 */}
      {step === 1 && (
        <div className="card-box">
          <h3>Start Your Consultation</h3>

          <p className="subtitle">
            Talk to a healthcare professional through live chat.
          </p>

          <button onClick={() => setStep(2)} className="btn">
            Start Consultation
          </button>
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div className="card-box">
          <h3>Patient Information</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Your Age"
            value={form.age}
            onChange={handleChange}
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option value="skin">Skin Problem</option>
            <option value="oral">Dental / Oral</option>
            <option value="general">General Health</option>
          </select>

          <textarea
            name="symptoms"
            placeholder="Describe your symptoms..."
            value={form.symptoms}
            onChange={handleChange}
          />

          <input
            type="text"
            name="duration"
            placeholder="How long have you had it?"
            value={form.duration}
            onChange={handleChange}
          />

          <button className="btn" onClick={() => setStep(3)}>
            Find Doctor
          </button>
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div className="card-box">
          <h3>Available Doctors</h3>

          <div className="doctor-card">
            <div>
              <h4>Dr. Sarah Wanjiku</h4>
              <p>Dermatologist</p>
            </div>

            <button className="btn" onClick={() => setStep(4)}>
              Chat
            </button>
          </div>

          <div className="doctor-card">
            <div>
              <h4>Dr. James Otieno</h4>
              <p>Dentist</p>
            </div>

            <button className="btn" onClick={() => setStep(4)}>
              Chat
            </button>
          </div>

          <button className="btn secondary" onClick={() => setStep(2)}>
            ← Back
          </button>
        </div>
      )}

      {/* STEP 4 - CHAT */}
      {step === 4 && (
        <div className="chat-box">
          <h3>Live Consultation Chat</h3>

          <div className="messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "user"
                    ? "message user-message"
                    : "message doctor-message"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />

            <button className="btn" onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsultPage;