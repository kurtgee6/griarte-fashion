import axios from "axios";

export default {
  // Gets all the clothing data
  getClothes: function() {
    return axios.get("/api/clothing");
  },
  // Gets the clothing items with the given id
  getClothingItem: function(id) {
    return axios.get("/api/clothing/" + id);
  },
  // Deletes the clothing item with the given id
  deleteClothingItem: function(id) {
    return axios.delete("/api/clothing/" + id);
  },
  // Add new clothing items to the inventory
  newClothingItem: function(clothingData) {
    return axios.post("/api/clothing", clothingData);
  },
  // Add a new user
  newUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  // Delete a user with id
  deleteUser: function(id) {
    return axios.delete("/api/user" + id);
  },
  // Get the user information with id
  getUserInfo: function(id){
    return axios.get("/api/user" + id);
  },
  // Get all the user information
  getAllUsers: function() {
    return axios.get("/api/user");
  },
  // Add FAQ question and answer
  addFAQ: function(faqData) {
    return axios.post("/api/faq", faqData);
  },
  // Delete FAQ question and answer
  deleteFAQ: function(id) {
    return axios.delete("/api/faq" + id);
  },
  // Get FAQs
  getFAQs: function() {
    return axios.get("/api/faq");
  },
  // Get FAQ with id
  getFAQ: function(id) {
    return axios.get("/api/faq" + id);
  }
};