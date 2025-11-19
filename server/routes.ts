import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/news", async (_req, res) => {
    const articles = await storage.getNewsArticles();
    res.json(articles);
  });

  app.get("/api/education-paths", async (_req, res) => {
    const paths = await storage.getEducationPaths();
    res.json(paths);
  });

  app.get("/api/schools", async (_req, res) => {
    const schools = await storage.getSchools();
    res.json(schools);
  });

  app.get("/api/research-stats", async (_req, res) => {
    const stats = await storage.getResearchStats();
    res.json(stats);
  });

  app.get("/api/profiles/:type", async (req, res) => {
    const profile = await storage.getProfile(req.params.type);
    if (!profile) {
      return res.status(404).json({ error: "Profile not found" });
    }
    res.json(profile);
  });

  app.get("/api/campus-life", async (_req, res) => {
    const sections = await storage.getCampusLifeSections();
    res.json(sections);
  });

  app.get("/api/arts", async (_req, res) => {
    const sections = await storage.getArtsSections();
    res.json(sections);
  });

  app.get("/api/events", async (_req, res) => {
    const events = await storage.getEvents();
    res.json(events);
  });

  app.get("/api/careers", async (_req, res) => {
    const careers = await storage.getCareers();
    res.json(careers);
  });

  app.get("/api/healthcare", async (_req, res) => {
    const sections = await storage.getHealthcareSections();
    res.json(sections);
  });

  app.get("/api/athletics", async (_req, res) => {
    const sections = await storage.getAthleticsSections();
    res.json(sections);
  });

  const httpServer = createServer(app);

  return httpServer;
}
