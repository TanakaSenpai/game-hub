import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "044915ffc60043f7974141385ba64a4d",
  }
});
