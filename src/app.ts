import express, { Application, Request, Response, NextFunction } from "express";
const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello from Express.js configuration with Typescript and ES6!");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
