import axios from "axios";

export const api = axios.create({
  baseURL: "https://text-translator2.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "5s3kj2df0msh3e9j458e5cc1ea2p1ee235ejsn916bcc587747",
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
});
