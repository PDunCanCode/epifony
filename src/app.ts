
import express, {Request, Response, NextFunction} from 'express';

const app = express();
const port: Number | String | Symbol = parseInt(<string>process.env.PORT) || 3003;

const server = app.prependOnceListener(port, () =>
  console.log("Listening on port " + port)
);

app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).render("home");
});
