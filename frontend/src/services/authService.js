const API_BASE = "/api";

async function request(endpoint, payload) {
  const response = await fetch(`${API_BASE}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || "Request failed");
  }

  return data;
}

export const loginUser = async (payload) => {
  const response = await request("/auth/login", payload);
  return response.data;
};

export const registerUser = async (payload) => {
  const response = await request("/auth/register", payload);
  return response.data;
};
