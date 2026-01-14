import { useEffect, useState } from "react";
import { getMessages, postMessage } from "./api";

function App() {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");

  const loadMessages = async () => {
    const data = await getMessages();
    setMessages(data);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const submit = async () => {
    if (!content) return;
    await postMessage(content, username || "anonymous");
    setContent("");
    loadMessages();
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto" }}>
      <h1>thewall.life</h1>

      <input
        placeholder="name (optional)"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />

      <textarea
        placeholder="write something..."
        value={content}
        onChange={e => setContent(e.target.value)}
      />

      <button onClick={submit}>Post</button>

      <hr />

      {messages.map(m => (
        <div key={m.id}>
          <b>{m.username}</b>: {m.content}
        </div>
      ))}
    </div>
  );
}

export default App;
