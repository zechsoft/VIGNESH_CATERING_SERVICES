import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [chatMessages, setChatMessages] = useState([
    {
      sender: 'Simran',
      text: "Hi! I'm Simran, your (totally free) wedding planning assistant. Would you like me to help you find venues and wedding vendors for your wedding?",
    },
  ]);

  const handleResponse = (response) => {
    // Add user's response to chat
    setChatMessages((prev) => [...prev, { sender: 'User', text: response }]);

    // Handle logic for steps
    let simranMessage = '';

    if (currentStep === 0 && response.toLowerCase() === 'yes') {
      simranMessage = 'Awesome! Let us begin with your preferences. Sounds good?';
      setCurrentStep(1);
    } else if (currentStep === 1 && response.toLowerCase() === 'yes, go ahead!') {
      simranMessage = "To proceed further, let's get to know each other. What's your name? :)";
      setCurrentStep(2);
    } else if (currentStep === 2) {
      simranMessage = `Excited to help you, ${response}! Which city are you planning to host your wedding in?`;
      setCurrentStep(3);
    } else if (currentStep === 3) {
      simranMessage = `Great choice! Please select a date for your wedding.`;
      setCurrentStep(4);
    } else if (currentStep === 4) {
      simranMessage = `How many times in a day do you need menus? (Enter a numeric value)`;
      setCurrentStep(5);
    } else {
      simranMessage = `Simran: Sorry, I didn't understand that.`;
    }

    // Add Simran's response to chat
    setChatMessages((prev) => [...prev, { sender: 'Simran', text: simranMessage }]);
  };

  return (
    <div className="chat-box">
      <div className="chat-header">Simran - Wedding Planner</div>
      <div className="chat-messages">
        {chatMessages.map((msg, index) => (
          <div key={index} className={msg.sender === 'Simran' ? 'ai-message' : 'user-message'}>
            {msg.sender}: {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        {currentStep === 0 && (
          <>
            <button onClick={() => handleResponse('yes')}>Yes</button>
            <button onClick={() => handleResponse('no')}>No</button>
          </>
        )}
        {currentStep > 0 && (
          <input
            type="text"
            placeholder="Type your response..."
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleResponse(e.target.value.trim());
                e.target.value = '';
              }
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
