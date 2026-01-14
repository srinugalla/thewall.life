const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export async function getMessages() {
  const res = await fetch(`${API_URL}/messages`);

  if (!res.ok) {
    throw new Error("Failed to fetch messages");
  }

  return res.json();
}

export async function postMessage(content, username = "anonymous") {
  const res = await fetch(`${API_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: content.trim(),
      username,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Failed to post message: ${err}`);
  }

  return res.json();
}
