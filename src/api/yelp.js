import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer lI-9fcn028i_dHXcBgH1g8gwAXfANNViMHqHY10Dy3A5nWB7w5yeYnkGseEYLKfHXN3qfYepPn1kbX29QIpGt985pkabc1HnmNDi_Q37q2ExI0FLji65BW2-HCJtYXYx",
  },
});
