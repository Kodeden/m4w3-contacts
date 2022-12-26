const BASE_URL = "http://localhost:3001/users";

export default {
  async index() {
    const response = await fetch(BASE_URL);
    return response.json();
  },

  async show(id) {
    const response = await fetch(`${BASE_URL}/${id}`);
    return response.json();
  },

  async create(newUser) {
    const response = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  },

  async update(id, updatedUser) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  },

  async delete(id) {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    return response.json();
  },
};
