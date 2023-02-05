import express from "express";
const app = express();
import router from "./routes/routes";
import { PORT} from "./config";
import DbConnect from "./database";
import cors from "cors"

//Database Connection
DbConnect();

//CORS Options
const corsOption = {
    origin: ['http://localhost:3000']
}
//USE
app.use(cors(corsOption))
app.use(express.json());
app.use("/api", router);



app.listen(PORT, () => console.log(`Listening on ${PORT}`))