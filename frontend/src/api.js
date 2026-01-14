const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export async function getMessages() {
  const res = await fetch(`${API_URL}/messages`);
  return res.json();
}

export async function postMessage(content, username) {
  const params = new URLSearchParams({ content, username });
  const res = await fetch(`${API_URL}/messages`, {
    method: "POST",
    body: params
  });
  return res.json();
}
