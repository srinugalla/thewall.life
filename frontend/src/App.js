import { useEffect, useState } from "react";
import { getMessages, postMessage } from "./api";

function App() {
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");
  const [username, setUsername] = useState("");
  const [openId, setOpenId] = useState(null);

  const loadMessages = async () => {
    const data = await getMessages();
    setMessages(data || []);
  };

  useEffect(() => {
    loadMessages();
  }, []);

  const submit = async () => {
    if (!content.trim()) return;
    await postMessage(content, username || "Anonymous");
    setContent("");
    loadMessages();
  };

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  // Featured = first message
  const featured = messages[0];
  const recent = messages.slice(1, 11); // next 10 messages

  return (
    <div className="page">
      {/* HEADER */}
      <div className="header">
        <div className="logo">THE WALL</div>
        <div className="tagline">Say it. No one will know.</div>
        <p className="subtext">
          Publish an anonymous message. No accounts. No names. No edits.
        </p>
      </div>

      {/* INPUT */}
      <div className="composer">
        <input
          placeholder="your name (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <textarea
          placeholder="Type something you've never said out loud..."
          value={content}
          maxLength={280}
          onChange={(e) => setContent(e.target.value)}
        />

        <button onClick={submit}>Publish anonymously</button>
        <small>$5 · Stored permanently via IPFS & blockchain</small>
      </div>

      {/* FEATURED */}
      {featured && (
        <div className="featured">
          <strong>⭐ Featured</strong>
          <p>{featured.content}</p>
          <small>— {featured.username}</small>
        </div>
      )}

      {/* WALL */}
      <div className="wall">
        <h3>Recent Posts</h3>

        {recent.map((m) => (
          <div key={m.id} className="post">
            <p>
              {openId === m.id
                ? m.content
                : m.content.slice(0, 80) +
                  (m.content.length > 80 ? "..." : "")}
            </p>

            <small>
              — {m.username} ·{" "}
              <span
                className="toggle"
                onClick={() => toggle(m.id)}
              >
                {openId === m.id ? "Hide ▲" : "View ▾"}
              </span>
            </small>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <footer>
        <small>
          Smart Contract · IPFS Archive · Moderation Policy · © 2026 THE WALL
        </small>
      </footer>
    </div>
  );
}

export default App;
