// const mongoose = require("mongoose");
// const mongoURI =
//   "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

// const connectToMongo = () => {
//   mongoose.connect(mongoURI, () => {
//     console.log("connect succesfully");
//   });
// };

// module.exports = connectToMongo;

const mongoose = require("mongoose");
const mongoURI =
  "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected successfully to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectToMongo;
