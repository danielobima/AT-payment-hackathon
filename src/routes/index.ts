import { Router, response } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("hello world");
});

router.post("/ussd", (req, res) => {
  console.log(req.body);

  res.setHeader("Content-Type", "text/plain").send("END Hello world");
});

export default router;
