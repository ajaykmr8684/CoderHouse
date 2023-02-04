import express from "express";
const app = express();
import router from "./routes/routes";
import { PORT} from "./config";
import DbConnect from "./database";

//Database Connection
DbConnect();

//USE
app.use(express.json());
app.use("/api", router);



app.listen(PORT, () => console.log(`Listening on ${PORT}`))