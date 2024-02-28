
const mongoose = require("mongoose");
require("dotenv").config();

const connectMongoDB = () => {
  return mongoose.connect(
    `mongodb+srv://vadivelan1998:vadivelan1234@cluster0.jejpkww.mongodb.net/e_kart?retryWrites=true&w=majority`
  );
};
module.exports = connectMongoDB;
