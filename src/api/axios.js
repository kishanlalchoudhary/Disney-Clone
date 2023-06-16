import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODJiMmM4MGQwZTEwNDg0ZGYxMTRkNzIxODIzMDRlOCIsInN1YiI6IjY0OGIwZjFjYzJmZjNkMDEzOWFjOGI2MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bQkDfzDLec2D2PjXK8Y0W3dWcxoN7TZCWiNACnXDHJw",
  },
});
