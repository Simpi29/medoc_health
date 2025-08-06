// src/routes/sample.routes.ts
import express from "express";
import { addSample, markCollected, getSamplesByAgent } from "../controllers/sample.controller";

const router = express.Router();

router.post("/samples", addSample);
router.patch("/samples/:id/collect", markCollected);
router.get("/samples/agent/:agentId", getSamplesByAgent);

export default router;
