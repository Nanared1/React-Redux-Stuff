import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 82ea950c9e6dc4eb98446b28425710f886458e5bdc47988da5e74283c6c080fc"
  }
});
