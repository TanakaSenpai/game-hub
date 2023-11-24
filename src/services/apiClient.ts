import axios from "axios"

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "bfe4cc57d4404f3b820187fe284f45e4",
  },
});

export default apiClient;
