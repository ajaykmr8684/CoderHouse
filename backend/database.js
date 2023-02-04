import { DB_URL } from "./config";
import mongoose from "mongoose"

/**
 * This utility function establishes the connection with MongoDb.
*/
function DbConnect()
{
    mongoose.connect(DB_URL)
    .then(() => console.log("DB Connection estbalished."))
    .catch((error) => console.log("Oops, Mongo died", error))
}

export default DbConnect;