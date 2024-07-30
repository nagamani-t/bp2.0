import mongo from "mongoose";
export const connectDb = () => {
  mongo
    .connect(
      process.env.MONGO_CONNECTION_STRING ?? ""
    )
    .then((res) => {
      console.log("mongodb connected successfully");
    })
    .catch((err) => {
      console.log(err, "-->");
    });
};
