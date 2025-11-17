import { useState, useRef, useEffect } from "react";
import './App.css';
import Header from "../../Components/Header";



function App() {
  useEffect(() => {
    // Change favicon to logo.png when this page mounts
    const favicon = document.getElementById("dynamic-favicon");
    if (favicon) {
      favicon.href = "/logoOM.png"; // logo.png should be in public folder
    }
    
     const originalTitle = document.title;
    document.title = "AiOM";
    // Optional: revert back to default favicon on unmount
    return () => {
      if (favicon) favicon.href = "/favicon.ico"; // original favicon
      document.title = originalTitle;
    };
  }, []);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef(null);
  const chatContainerRef = useRef(null);
  const threadIdRef = useRef(null);

  useEffect(() => {
    // Generate unique threadId
    if (!threadIdRef.current) {
      threadIdRef.current = Date.now().toString(36) + Math.random().toString(36).substring(2, 8);
    }

    // Add welcome message from assistant
    setMessages([{ sender: 'assistant', text: 'Hi, I am AiOM — an AI assistant for OM ELECTRICALS. How can I assist you?' }]);
  }, []);

  const threadId = threadIdRef.current;
  const API_BASE = import.meta.env.VITE_API_BASE;

  async function callServer(inputText) {
  const response = await fetch(`${API_BASE}/chat`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ threadId, message: inputText }),
  });
  if (!response.ok) throw new Error("Error generating response");
  const result = await response.json();
  return result.message;
}

  async function generate(text) {
    if (!text) return;

    setMessages(prev => [...prev, { sender: 'user', text }]);
    textareaRef.current.value = "";

    setLoading(true);
    const assistantMessage = await callServer(text);
    setLoading(false);

    setMessages(prev => [...prev, { sender: 'assistant', text: assistantMessage }]);

    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }

  function handleSend() {
    const text = textareaRef.current?.value.trim();
    generate(text);
  }

  function handleEnter(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      const text = textareaRef.current?.value.trim();
      generate(text);
    }
  }

  // function handleBackHome() {
  //   window.location.href = "/";
  // }

  return (
    <div className="app-container">
       {/* <Header/> */}

      {/* Left Side Buttons */}
    <div className="side-nav left-nav">
      <h5>Quick Access</h5>
      <button onClick={() => window.location.href = "/"}>«  Back to Home</button>
      <button onClick={() => window.location.href = "/consumer-care"}>Contact Details</button>
      <button onClick={() => window.location.href = "/about"}>About Us</button>
    </div>
      <div className="chat-box  p-3" style={{ border: "0.3px solid gray" }}>
        {/* Chat Area */}
        <div ref={chatContainerRef} className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.sender}`}>
              <div className="message-content">{msg.text}</div>
            </div>
          ))}

          {loading && <div className="loading">Assistant is typing...</div>}
        </div>

        {/* Input Area */}
        <div className="input-area">
          <textarea
            ref={textareaRef}
            onKeyDown={handleEnter}
            rows={2}
            placeholder="Ask something..."
          ></textarea>
          <div className="button-group">
            <button onClick={handleSend}>Ask</button>
            {/* <button onClick={handleBackHome} className="back-home-btn">Back to Home</button> */}
          </div>
        </div>
      </div>
        <div className="side-nav right-nav">
      {/* <button onClick={() => window.location.href = "/about"}>About Us</button> */}
    </div>
    </div>
  );
}

export default App;
