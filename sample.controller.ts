// src/controllers/sample.controller.ts
import { Request, Response } from "express";
import Sample from "../models/sample.model";

export const addSample = async (req: Request, res: Response) => {
  const { id } = req.params;
  const sample = await Sample.findByIdAndUpdate(id, { status: "collected" }, { new: true });
  res.json(sample);
};

export const markCollected = async (req: Request, res: Response) => {
  const { id } = req.params;
  const sample = await Sample.findByIdAndUpdate(id, { status: "collected" }, { new: true });
  res.json(sample);
};

export const getSamplesByAgent = async (req: Request, res: Response) => {
  const { agentId } = req.params;
  const samples = await Sample.find({ agentId });
  res.json(samples);
};
