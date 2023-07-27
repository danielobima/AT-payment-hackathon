import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("hello world");
});

router.post("/ussd", (req, res) => {
  console.log(req.body);

  res.send("CON:Hello world");
});

export default router;
