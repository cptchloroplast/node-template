import express from "express";
import { PORT } from "./config";
import { userRouter } from "./routes";

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use("/users", userRouter);

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});
