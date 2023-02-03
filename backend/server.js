import express from "express";
const app = express();
import router from "./routes/routes";
import { PORT } from "./config";

//USE
app.use(express.json());
app.use("/api", router);



app.listen(PORT, () => console.log(`Listening on ${PORT}`))