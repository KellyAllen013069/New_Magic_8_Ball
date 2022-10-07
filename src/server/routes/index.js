import express from "express";
import responsesController from "../controllers/responses.controller";
import usersController from "../controllers/users.controller";

const router = express.Router();

router.get("/test", (req, res, next) => {
  res.send("Hello World!");
});

router.get("/responses", async (req, res, next) => {
  try {
    let data = await responsesController.findDefaultResponses();
    res.json(data);
  } catch (err) {
    console.log (err);
    next(err)
  }
});

router.post("/addUser", async (req, res, next) => {
  try {
    let userDTO = req.body;
    let data = await usersController.addUser(userDTO);
    res.json(data);
  } catch (err) {
    console.log(err);
    next(err)
  }
});

/* router.get("/products", async (req, res, next) => {
  try {
    let data = await responsesController.findDefaultResponses();
    res.json(data);
    res.json(data);
  } catch (err) {
    console.log (err);
    next(err)
  }
}); */

export default router;
