import express from "express";
import {
  createUrl,
  deleteUrl,
  getAllUrls,
  getUrl,
} from "../controllers/urlControllers";

const router = express.Router();

router.post("/shortUrl/new", createUrl);
router.get("/shortUrl/all", getAllUrls);
router.get("/shortUrl/:id", getUrl);
router.delete("/shortUrl/delete/:id", deleteUrl);

export default router;
